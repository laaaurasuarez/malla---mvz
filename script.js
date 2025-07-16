const ramos = [
  // PRIMER AÑO – SEMESTRE I
  { nombre: "Biología celular", id: "biologia_celular", desbloquea: ["biologia_molecular", "histologia", "microbiologia", "inmunologia"], semestre: "sem1", orden: 1 },
  { nombre: "Competencias comunicativas", id: "comunicativas", semestre: "sem1", orden: 2 },
  { nombre: "Inglés 1", id: "ingles_1", semestre: "sem1", orden: 3 },
  { nombre: "Iniciación a las ciencias pecuarias", id: "iniciacion", desbloquea: ["etologia", "suelos"], semestre: "sem1", orden: 4 },
  { nombre: "Principios de estadística aplicada a las ciencias pecuarias", id: "estadistica", desbloquea: ["biologia_molecular", "herencia"], semestre: "sem1", orden: 5 },
  { nombre: "Química Orgánica", id: "quimica_organica", desbloquea: ["bioquimica", "suelos"], semestre: "sem1", orden: 6 },

  // PRIMER AÑO – SEMESTRE II
  { nombre: "Antropología cultural", id: "antropologia", desbloquea: ["sociologia"], semestre: "sem2", orden: 1 },
  { nombre: "Biofísica", id: "biofisica", desbloquea: ["fisiologia", "anatomia"], semestre: "sem2", orden: 2 },
  { nombre: "Biología molecular", id: "biologia_molecular", requiere: ["biologia_celular", "estadistica"], semestre: "sem2", orden: 3 },
  { nombre: "Bioquímica", id: "bioquimica", requiere: ["quimica_organica"], desbloquea: ["fisiologia", "nutricion_mono"], semestre: "sem2", orden: 4 },
  { nombre: "Epistemología", id: "epistemologia", desbloquea: ["proyectos"], semestre: "sem2", orden: 5 },
  { nombre: "Etología y bienestar animal", id: "etologia", requiere: ["iniciacion"], semestre: "sem2", orden: 6 },
  { nombre: "Ética y bioética", id: "etica", semestre: "sem2", orden: 7 },
  { nombre: "Inglés 2", id: "ingles_2", semestre: "sem2", orden: 8 },

  // SEGUNDO AÑO – SEMESTRE III
  { nombre: "Anatomía animal", id: "anatomia", requiere: ["biofisica"], desbloquea: ["parasitologia", "semiologia", "infecciosas"], semestre: "sem3", orden: 1 },
  { nombre: "Economía agraria", id: "economia", semestre: "sem3", orden: 2 },
  { nombre: "Fisiología animal", id: "fisiologia", requiere: ["bioquimica", "biofisica"], desbloquea: ["parasitologia", "infecciosas", "semiologia"], semestre: "sem3", orden: 3 },
  { nombre: "Histología animal", id: "histologia", requiere: ["biologia_celular"], desbloquea: ["patologia_general"], semestre: "sem3", orden: 4 },
  { nombre: "Sociología rural", id: "sociologia", requiere: ["antropologia"], desbloquea: ["desarrollo"], semestre: "sem3", orden: 5 },

  // SEGUNDO AÑO – SEMESTRE IV
  { nombre: "Inmunología veterinaria", id: "inmunologia", requiere: ["biologia_celular"], desbloquea: ["infecciosas"], semestre: "sem4", orden: 1 },
  { nombre: "Microbiología veterinaria", id: "microbiologia", requiere: ["biologia_celular"], desbloquea: ["infecciosas"], semestre: "sem4", orden: 2 },
  { nombre: "Parasitología y enfermedades parasitarias", id: "parasitologia", requiere: ["fisiologia", "anatomia"], desbloquea: ["infecciosas"], semestre: "sem4", orden: 3 },
  { nombre: "Patología general", id: "patologia_general", requiere: ["histologia"], desbloquea: ["infecciosas", "patologia_sistematica"], semestre: "sem4", orden: 4 },
  { nombre: "Proyectos de investigación", id: "proyectos", requiere: ["epistemologia"], semestre: "sem4", orden: 5 },
  { nombre: "Suelos y recursos forrajeros", id: "suelos", requiere: ["quimica_organica", "iniciacion"], desbloquea: ["nutricion_rumiantes"], semestre: "sem4", orden: 6 }
];

const aprobados = new Set();
const ramosDOM = {};

function crearCaja(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  if (ramo.requiere && ramo.requiere.length) div.classList.add("bloqueado");
  div.textContent = ramo.nombre;
  div.id = ramo.id;
  div.onclick = () => {
    if (div.classList.contains("bloqueado") || div.classList.contains("aprobado")) return;
    div.classList.add("aprobado");
    aprobados.add(ramo.id);
    desbloquear(ramo);
  };
  const contenedorSemestre = document.getElementById(ramo.semestre || "sem1");
  contenedorSemestre?.appendChild(div);
  ramosDOM[ramo.id] = div;
}

function desbloquear(ramo) {
  (ramo.desbloquea || []).forEach(id => {
    const siguiente = ramos.find(r => r.id === id);
    if (siguiente.requiere?.every(req => aprobados.has(req))) {
      ramosDOM[id]?.classList.remove("bloqueado");
    }
  });
}

// Ordenar por semestre y orden dentro del semestre
const ramosOrdenados = ramos.sort((a, b) => {
  if (a.semestre !== b.semestre) return a.semestre.localeCompare(b.semestre);
  return (a.orden || 0) - (b.orden || 0);
});

ramosOrdenados.forEach(crearCaja);
