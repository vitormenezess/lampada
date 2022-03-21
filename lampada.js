const ligado = document.getElementById("ligado");
const desligado = document.getElementById("desligado");
const lamp = document.getElementById("lamp");

function lampOn() {
  lamp.src = "imagens/ligada.jpg";
}
function lampOff() {
  lamp.src = "imagens/desligada.jpg";
}
function lampQ() {
  lamp.src = "imagens/quebrada.jpg";
}

ligado.addEventListener("click", lampOn);
desligado.addEventListener("click", lampOff);
lamp.addEventListener("click", lampQ);
