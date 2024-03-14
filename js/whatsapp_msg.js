function isNumeric(value) {
    return /^\d+$/.test(value);
}

function miWhatsapp() {

  let text;
  let movil = document.getElementById("numMovil").value;
  if (isNumeric(movil)) {
    text = movil;
    location.assign("https://api.whatsapp.com/send?phone=" + movil)
  } else {
    text = "Móvil inválido: " + movil;
  }
    document.getElementById("mensaje").innerHTML = "Ultimo: " + text;
}