const ligaDesliga = document.getElementById("ligaDesliga");
const lamp = document.getElementById("lamp");

function lampOn() {
  if (!isLampQ()) lamp.src = "imagens/ligada.jpg";
}
function lampOff() {
  if (!isLampQ()) lamp.src = "imagens/desligada.jpg";
}
function lampQ() {
  lamp.src = "imagens/quebrada.jpg";
}
function isLampQ() {
  return lamp.src.indexOf("quebrada") > -1;
}
function lampOnOff() {
  if (ligaDesliga.textContent == "Ligar") {
    lampOn();
    ligaDesliga.textContent = "Deligar";
    ligaDesliga.style.background = 'red'
  } else {
    lampOff();
    ligaDesliga.textContent = "Ligar";
    ligaDesliga.style.background = 'rgb(4, 207, 4)'
  }
}

ligaDesliga.addEventListener("click", lampOnOff);

lamp.addEventListener("click", lampQ);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
