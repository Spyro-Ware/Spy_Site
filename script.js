// Act Int 3 - JavaScript para el sitio de Tecnologia y Gadgets

// Modo claro: pregunta y cambia los colores del sitio
function cambiarModo() {
  var modo = prompt("Escribe claro o oscuro");
  if (modo == "claro") {
    document.body.style.backgroundColor = "#F5F5F5";
    document.body.style.color = "#222222";
    alert("Modo claro activado");
  } else {
    document.body.style.backgroundColor = "#17191C";
    document.body.style.color = "#E5E5E5";
    alert("Modo oscuro activado");
  }
}
