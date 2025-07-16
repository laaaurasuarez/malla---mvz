const ramos = [
  // PRIMER AÑO – SEMESTRE I
  { nombre: "Química Orgánica", id: "quimica_organica", desbloquea: ["bioquimica", "suelos"] },
  { nombre: "Principios de estadística aplicada a las ciencias pecuarias", id: "estadistica", desbloquea: ["biologia_molecular", "herencia"] },
  { nombre: "Competencias comunicativas", id: "comunicativas" },
  { nombre: "Iniciación a las ciencias pecuarias", id: "iniciacion", desbloquea: ["etologia", "suelos"] },
  { nombre: "Biología celular", id: "biologia_celular", desbloquea: ["biologia_molecular", "histologia", "microbiologia", "inmunologia"] },
  { nombre: "Inglés 1", id: "ingles_1" },

  // PRIMER AÑO – SEMESTRE II
  { nombre: "Epistemología", id: "epistemologia", desbloquea: ["proyectos"] },
  { nombre: "Etología y bienestar animal", id: "etologia", requiere: ["iniciacion"] },
  { nombre: "Ética y bioética", id: "etica" },
  { nombre: "Antropología cultural", id: "antropologia", desbloquea: ["sociologia"] },
  { nombre: "Biología molecular", id: "biologia_molecular", requiere: ["biologia_celular", "estadistica"] },
  { nombre: "Bioquímica", id: "bioquimica", requiere: ["quimica_organica"], desbloquea: ["fisiologia", "nutricion_mono"] },
  { nombre: "Biofísica", id: "biofisica", desbloquea: ["fisiologia", "anatomia"] },
  { nombre: "Inglés 2", id: "ingles_2" },

  // SEGUNDO AÑO – SEMESTRE III
  { nombre: "Fisiología animal", id: "fisiologia", requiere: ["bioquimica", "biofisica"], desbloquea: ["parasitologia", "infecciosas", "semiologia"] },
  { nombre: "Anatomía animal", id: "anatomia", requiere: ["biofisica"], desbloquea: ["parasitologia", "semiologia", "infecciosas"] },
  { nombre: "Histología animal", id: "histologia", requiere: ["biologia_celular"], desbloquea: ["patologia_general"] },
  { nombre: "Sociología rural", id: "sociologia", requiere: ["antropologia"], desbloquea: ["desarrollo"] },
  { nombre: "Economía agraria", id: "economia" },

  // SEGUNDO AÑO – SEMESTRE IV
  { nombre: "Suelos y recursos forrajeros", id: "suelos", requiere: ["quimica_organica", "iniciacion"], desbloquea: ["nutricion_rumiantes"] },
  { nombre: "Patología general", id: "patologia_general", requiere: ["histologia"], desbloquea: ["infecciosas", "patologia_sistematica"] },
  { nombre: "Parasitología y enfermedades parasitarias", id: "parasitologia", requiere: ["fisiologia", "anatomia"], desbloquea: ["infecciosas"] },
  { nombre: "Microbiología veterinaria", id: "microbiologia", requiere: ["biologia_celular"], desbloquea: ["infecciosas"] },
  { nombre: "Proyectos de investigación", id: "proyectos", requiere: ["epistemologia"] },
  { nombre: "Inmunología veterinaria", id: "inmunologia", requiere: ["biologia_celular"], desbloquea: ["infecciosas"] },

  // TERCER AÑO – SEMESTRE V
  { nombre: "Enfermedades infecciosas", id: "infecciosas", requiere: ["parasitologia", "microbiologia", "patologia_general", "anatomia", "fisiologia", "inmunologia"], desbloquea: ["preventiva", "farmacologia", "patologia_clinica", "reproduccion"] },
  { nombre: "Nutrición de monogástricos", id: "nutricion_mono", requiere: ["bioquimica"] },
  { nombre: "Nutrición de rumiantes", id: "nutricion_rumiantes", requiere: ["suelos"] },
  { nombre: "Patología sistemática", id: "patologia_sistematica", requiere: ["patologia_general"] },
  { nombre: "Herencia, variación y mejoramiento genético animal", id: "herencia", requiere: ["estadistica"] },
  { nombre: "Constitución política", id: "constitucion" },

  // TERCER AÑO – SEMESTRE VI
  { nombre: "Medicina veterinaria preventiva y epidemiológica", id: "preventiva", requiere: ["infecciosas"], desbloquea: ["salud_publica", "medicina_interna"] },
  { nombre: "Farmacología y terapéutica veterinaria", id: "farmacologia", requiere: ["infecciosas"], desbloquea: ["cirugia", "medicina_interna", "toxicologia"] },
  { nombre: "Patología clínica", id: "patologia_clinica", requiere: ["infecciosas"] },
  { nombre: "Semiología", id: "semiologia", requiere: ["fisiologia", "anatomia"], desbloquea: ["cirugia", "medicina_interna"] },
  { nombre: "Desarrollo rural", id: "desarrollo", requiere: ["sociologia"] },
  { nombre: "Sistema de producción", id: "sistemas" },

  // CUARTO AÑO – SEMESTRE VII
  { nombre: "Reproducción animal", id: "reproduccion", requiere: ["infecciosas"] },
  { nombre: "Cirugía veterinaria", id: "cirugia", requiere: ["semiologia", "farmacologia"] },
  { nombre: "Salud pública veterinaria", id: "salud_publica", requiere: ["preventiva"] },
  { nombre: "Medicina interna", id: "medicina_interna", requiere: ["semiologia", "farmacologia", "preventiva"] },
  { nombre: "Toxicología médica y de la producción", id: "toxicologia", requiere: ["farmacologia"] },
  { nombre: "Administración y gerencia de empresas pecuarias", id: "administracion" },

  // CUARTO AÑO – SEMESTRE VIII
  { nombre: "Formulación y evaluación de proyectos", id: "formulacion" },
  { nombre: "Clínica de grandes animales", id: "clinica_grandes", requiere: ["medicina_interna"] },
  { nombre: "Clínica de pequeños animales", id: "clinica_pequenos", requiere: ["medicina_interna"] },

  // QUINTO AÑO – SEMESTRE IX
  { nombre: "Producción y salud de ovinos y caprinos", id: "ovinos", requiere: ["clinica_grandes"] },
  { nombre: "Producción y salud avícola", id: "avicola", requiere: ["clinica_grandes"] },
  { nombre: "Producción y salud de equinos", id: "equinos", requiere: ["clinica_grandes"] },
  { nombre: "Producción y salud de porcinos", id: "porcinos", requiere: ["clinica_grandes"] },
  { nombre: "Producción y salud bovina", id: "bovinos", requiere: ["clinica_grandes"] },
  { nombre: "Tecnología de alimentos", id: "alimentos", requiere: ["clinica_grandes"] },
  { nombre: "Industrias pecuarias", id: "industrias", requiere: ["clinica_grandes"] },

  // QUINTO AÑO – SEMESTRE X
  { nombre: "Pasantía", id: "pasantia", requiere: ["ovinos", "avicola", "equinos", "porcinos", "bovinos", "alimentos", "industrias"] },
  { nombre: "Opción de grado", id: "grado", requiere: ["ovinos", "avicola", "equinos", "porcinos", "bovinos", "alimentos", "industrias"] }
];

const container = document.getElementById("malla-container");

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
  container.appendChild(div);
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
