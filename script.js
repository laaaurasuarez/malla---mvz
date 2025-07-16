const ramos = [
  // PRIMER AÑO – SEMESTRE I
  { nombre: "Química Orgánica", id: "quimica_organica", desbloquea: ["bioquimica", "suelos"], semestre: "sem1" },
  { nombre: "Principios de estadística aplicada a las ciencias pecuarias", id: "estadistica", desbloquea: ["biologia_molecular", "herencia"], semestre: "sem1" },
  { nombre: "Competencias comunicativas", id: "comunicativas", semestre: "sem1" },
  { nombre: "Iniciación a las ciencias pecuarias", id: "iniciacion", desbloquea: ["etologia", "suelos"], semestre: "sem1" },
  { nombre: "Biología celular", id: "biologia_celular", desbloquea: ["biologia_molecular", "histologia", "microbiologia", "inmunologia"], semestre: "sem1" },
  { nombre: "Inglés 1", id: "ingles_1", semestre: "sem1" },

  // PRIMER AÑO – SEMESTRE II
  { nombre: "Epistemología", id: "epistemologia", desbloquea: ["proyectos"], semestre: "sem2" },
  { nombre: "Etología y bienestar animal", id: "etologia", requiere: ["iniciacion"], semestre: "sem2" },
  { nombre: "Ética y bioética", id: "etica", semestre: "sem2" },
  { nombre: "Antropología cultural", id: "antropologia", desbloquea: ["sociologia"], semestre: "sem2" },
  { nombre: "Biología molecular", id: "biologia_molecular", requiere: ["biologia_celular", "estadistica"], semestre: "sem2" },
  { nombre: "Bioquímica", id: "bioquimica", requiere: ["quimica_organica"], desbloquea: ["fisiologia", "nutricion_mono"], semestre: "sem2" },
  { nombre: "Biofísica", id: "biofisica", desbloquea: ["fisiologia", "anatomia"], semestre: "sem2" },
  { nombre: "Inglés 2", id: "ingles_2", semestre: "sem2" },

  // SEGUNDO AÑO – SEMESTRE III
  { nombre: "Fisiología animal", id: "fisiologia", requiere: ["bioquimica", "biofisica"], desbloquea: ["parasitologia", "infecciosas", "semiologia"], semestre: "sem3" },
  { nombre: "Anatomía animal", id: "anatomia", requiere: ["biofisica"], desbloquea: ["parasitologia", "semiologia", "infecciosas"], semestre: "sem3" },
  { nombre: "Histología animal", id: "histologia", requiere: ["biologia_celular"], desbloquea: ["patologia_general"], semestre: "sem3" },
  { nombre: "Sociología rural", id: "sociologia", requiere: ["antropologia"], desbloquea: ["desarrollo"], semestre: "sem3" },
  { nombre: "Economía agraria", id: "economia", semestre: "sem3" },

  // SEGUNDO AÑO – SEMESTRE IV
  { nombre: "Suelos y recursos forrajeros", id: "suelos", requiere: ["quimica_organica", "iniciacion"], desbloquea: ["nutricion_rumiantes"], semestre: "sem4" },
  { nombre: "Patología general", id: "patologia_general", requiere: ["histologia"], desbloquea: ["infecciosas", "patologia_sistematica"], semestre: "sem4" },
  { nombre: "Parasitología y enfermedades parasitarias", id: "parasitologia", requiere: ["fisiologia", "anatomia"], desbloquea: ["infecciosas"], semestre: "sem4" },
  { nombre: "Microbiología veterinaria", id: "microbiologia", requiere: ["biologia_celular"], desbloquea: ["infecciosas"], semestre: "sem4" },
  { nombre: "Proyectos de investigación", id: "proyectos", requiere: ["epistemologia"], semestre: "sem4" },
  { nombre: "Inmunología veterinaria", id: "inmunologia", requiere: ["biologia_celular"], desbloquea: ["infecciosas"], semestre: "sem4" },

  // TERCER AÑO – SEMESTRE V
  { nombre: "Enfermedades infecciosas", id: "infecciosas", requiere: ["parasitologia", "microbiologia", "patologia_general", "anatomia", "fisiologia", "inmunologia"], desbloquea: ["preventiva", "farmacologia", "patologia_clinica", "reproduccion"], semestre: "sem5" },
  { nombre: "Nutrición de monogástricos", id: "nutricion_mono", requiere: ["bioquimica"], semestre: "sem5" },
  { nombre: "Nutrición de rumiantes", id: "nutricion_rumiantes", requiere: ["suelos"], semestre: "sem5" },
  { nombre: "Patología sistemática", id: "patologia_sistematica", requiere: ["patologia_general"], semestre: "sem5" },
  { nombre: "Herencia, variación y mejoramiento genético animal", id: "herencia", requiere: ["estadistica"], semestre: "sem5" },
  { nombre: "Constitución política", id: "constitucion", semestre: "sem5" },

  // TERCER AÑO – SEMESTRE VI
  { nombre: "Medicina veterinaria preventiva y epidemiológica", id: "preventiva", requiere: ["infecciosas"], desbloquea: ["salud_publica", "medicina_interna"], semestre: "sem6" },
  { nombre: "Farmacología y terapéutica veterinaria", id: "farmacologia", requiere: ["infecciosas"], desbloquea: ["cirugia", "medicina_interna", "toxicologia"], semestre: "sem6" },
  { nombre: "Patología clínica", id: "patologia_clinica", requiere: ["infecciosas"], semestre: "sem6" },
  { nombre: "Semiología", id: "semiologia", requiere: ["fisiologia", "anatomia"], desbloquea: ["cirugia", "medicina_interna"], semestre: "sem6" },
  { nombre: "Desarrollo rural", id: "desarrollo", requiere: ["sociologia"], semestre: "sem6" },
  { nombre: "Sistema de producción", id: "sistemas", semestre: "sem6" },

  // CUARTO AÑO – SEMESTRE VII
  { nombre: "Reproducción animal", id: "reproduccion", requiere: ["infecciosas"], semestre: "sem7" },
  { nombre: "Cirugía veterinaria", id: "cirugia", requiere: ["semiologia", "farmacologia"], semestre: "sem7" },
  { nombre: "Salud pública veterinaria", id: "salud_publica", requiere: ["preventiva"], semestre: "sem7" },
  { nombre: "Medicina interna", id: "medicina_interna", requiere: ["semiologia", "farmacologia", "preventiva"], semestre: "sem7" },
  { nombre: "Toxicología médica y de la producción", id: "toxicologia", requiere: ["farmacologia"], semestre: "sem7" },
  { nombre: "Administración y gerencia de empresas pecuarias", id: "administracion", semestre: "sem7" },

  // CUARTO AÑO – SEMESTRE VIII
  { nombre: "Formulación y evaluación de proyectos", id: "formulacion", semestre: "sem8" },
  { nombre: "Clínica de grandes animales", id: "clinica_grandes", requiere: ["medicina_interna"], semestre: "sem8" },
  { nombre: "Clínica de pequeños animales", id: "clinica_pequenos", requiere: ["medicina_interna"], semestre: "sem8" },

  // QUINTO AÑO – SEMESTRE IX
  { nombre: "Producción y salud de ovinos y caprinos", id: "ovinos", requiere: ["clinica_grandes"], semestre: "sem9" },
  { nombre: "Producción y salud avícola", id: "avicola", requiere: ["clinica_grandes"], semestre: "sem9" },
  { nombre: "Producción y salud de equinos", id: "equinos", requiere: ["clinica_grandes"], semestre: "sem9" },
  { nombre: "Producción y salud de porcinos", id: "porcinos", requiere: ["clinica_grandes"], semestre: "sem9" },
  { nombre: "Producción y salud bovina", id: "bovinos", requiere: ["clinica_grandes"], semestre: "sem9" },
  { nombre: "Tecnología de alimentos", id: "alimentos", requiere: ["clinica_grandes"], semestre: "sem9" },
  { nombre: "Industrias pecuarias", id: "industrias", requiere: ["clinica_grandes"], semestre: "sem9" },

  // QUINTO AÑO – SEMESTRE X
  { nombre: "Pasantía", id: "pasantia", requiere: ["ovinos", "avicola", "equinos", "porcinos", "bovinos", "alimentos", "industrias"], semestre: "sem10" },
  { nombre: "Opción de grado", id: "grado", requiere: ["ovinos", "avicola", "equinos", "porcinos", "bovinos", "alimentos", "industrias"], semestre: "sem10" }
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

ramos.forEach(crearCaja);
