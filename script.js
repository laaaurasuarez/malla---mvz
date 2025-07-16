const ramos = [
  {
    nombre: "Química Orgánica",
    id: "quimica_organica",
    desbloquea: ["bioquimica", "suelos"]
  },
  {
    nombre: "Bioquímica",
    id: "bioquimica",
    requiere: ["quimica_organica"],
    desbloquea: ["fisiologia", "nutricion_mono"]
  },
  {
    nombre: "Suelos y recursos forrajeros",
    id: "suelos",
    requiere: ["quimica_organica", "iniciacion"]
  },
  {
    nombre: "Iniciación a las ciencias pecuarias",
    id: "iniciacion",
    desbloquea: ["etologia", "suelos"]
  },
  {
    nombre: "Etología y bienestar animal",
    id: "etologia",
    requiere: ["iniciacion"]
  },
  // ... continúa con el resto de materias
];

const container = document.getElementById("malla-container");

const aprobados = new Set();
const ramosDOM = {};

function crearCaja(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.classList.add(ramo.requiere && ramo.requiere.length ? "bloqueado" : "");
  div.textContent = ramo.nombre;
  div.id = ramo.id;
  div.onclick = () => {
    if (div.classList.contains("bloqueado")) return;
    if (div.classList.contains("aprobado")) return;
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
    if (siguiente.requiere.every(req => aprobados.has(req))) {
      ramosDOM[id]?.classList.remove("bloqueado");
    }
  });
}

ramos.forEach(crearCaja);
