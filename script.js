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
  { nombre: "Suelos y recursos forrajeros", id: "suelos", requiere: ["quimica_organica", "iniciacion"], desbloquea: ["nutricion_rumiantes"], semestre: "sem4", orden: 6 },

  // TERCER AÑO – SEMESTRE V
  { nombre: "Enfermedades infecciosas", id: "infecciosas", requiere: ["patologia_general", "parasitologia", "microbiologia", "inmunologia", "fisiologia", "anatomia"], desbloquea: ["epidemiologia", "farmacologia", "patologia_clinica", "reproduccion"], semestre: "sem5", orden: 1 },
  { nombre: "Nutrición de monogástricos", id: "nutricion_mono", requiere: ["bioquimica"], semestre: "sem5", orden: 2 },
  { nombre: "Nutrición de rumiantes", id: "nutricion_rumiantes", requiere: ["suelos"], semestre: "sem5", orden: 3 },
  { nombre: "Patología sistémica", id: "patologia_sistematica", requiere: ["patologia_general"], semestre: "sem5", orden: 4 },
  { nombre: "Herencia, variación y mejoramiento genético animal", id: "herencia", requiere: ["estadistica"], semestre: "sem5", orden: 5 },
  { nombre: "Constitución política", id: "constitucion", semestre: "sem5", orden: 6 },

  // TERCER AÑO – SEMESTRE VI
  { nombre: "Medicina veterinaria preventiva y epidemiológica", id: "epidemiologia", requiere: ["infecciosas"], desbloquea: ["salud_publica", "medicina_interna"], semestre: "sem6", orden: 1 },
  { nombre: "Farmacología y terapéutica veterinaria", id: "farmacologia", requiere: ["infecciosas"], desbloquea: ["cirugia", "medicina_interna", "toxicologia"], semestre: "sem6", orden: 2 },
  { nombre: "Patología clínica", id: "patologia_clinica", requiere: ["infecciosas"], semestre: "sem6", orden: 3 },
  { nombre: "Semiología", id: "semiologia", requiere: ["fisiologia", "anatomia"], desbloquea: ["cirugia", "medicina_interna"], semestre: "sem6", orden: 4 },
  { nombre: "Desarrollo rural", id: "desarrollo", requiere: ["sociologia"], semestre: "sem6", orden: 5 },
  { nombre: "Sistema de producción", id: "sistema", semestre: "sem6", orden: 6 },

  // CUARTO AÑO – SEMESTRE VII
  { nombre: "Reproducción animal", id: "reproduccion", requiere: ["infecciosas"], semestre: "sem7", orden: 1 },
  { nombre: "Cirugía veterinaria", id: "cirugia", requiere: ["semiologia", "farmacologia"], semestre: "sem7", orden: 2 },
  { nombre: "Salud pública veterinaria", id: "salud_publica", requiere: ["epidemiologia"], semestre: "sem7", orden: 3 },
  { nombre: "Medicina interna", id: "medicina_interna", requiere: ["epidemiologia", "farmacologia", "semiologia"], semestre: "sem7", orden: 4 },
  { nombre: "Toxicología médica y de la producción", id: "toxicologia", requiere: ["farmacologia"], semestre: "sem7", orden: 5 },
  { nombre: "Administración y gerencia de empresas pecuarias", id: "admin", semestre: "sem7", orden: 6 },

  // CUARTO AÑO – SEMESTRE VIII
  { nombre: "Formulación y evaluación de proyectos", id: "proyectos2", semestre: "sem8", orden: 1 },
  { nombre: "Clínica de grandes animales", id: "clinica_grandes", requiere: [], semestre: "sem8", orden: 2 },
  { nombre: "Clínica de pequeños animales", id: "clinica_pequenos", requiere: [], semestre: "sem8", orden: 3 },

  // QUINTO AÑO – SEMESTRE IX
  { nombre: "Producción y salud de ovinos y caprinos", id: "ovinos", semestre: "sem9", orden: 1 },
  { nombre: "Producción y salud avícola", id: "avicola", semestre: "sem9", orden: 2 },
  { nombre: "Producción y salud de equinos", id: "equinos", semestre: "sem9", orden: 3 },
  { nombre: "Producción y salud de porcinos", id: "porcinos", semestre: "sem9", orden: 4 },
  { nombre: "Producción y salud bovina", id: "bovina", semestre: "sem9", orden: 5 },
  { nombre: "Tecnología de alimentos", id: "alimentos", semestre: "sem9", orden: 6 },
  { nombre: "Industrias pecuarias", id: "industrias", semestre: "sem9", orden: 7 },

  // QUINTO AÑO – SEMESTRE X
  { nombre: "Pasantía", id: "pasantia", semestre: "sem10", orden: 1 },
  { nombre: "Opción de grado", id: "grado", semestre: "sem10", orden: 2 }
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

const ramosOrdenados = ramos.sort((a, b) => {
  if (a.semestre !== b.semestre) return a.semestre.localeCompare(b.semestre);
  return (a.orden || 0) - (b.orden || 0);
});

ramosOrdenados.forEach(crearCaja);

for (let i = 1; i <= 10; i++) {
  const div = document.getElementById(`sem${i}`);
  if (div) {
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.flexWrap = "nowrap";
    div.style.justifyContent = "flex-start";
    div.style.alignItems = "center";
    div.style.gap = "10px";
    div.style.minHeight = "200px";
  }
}
