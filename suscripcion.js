
function guardarCorreo() {
  const correo = document.getElementById('correo').value;
  if (correo) {
    localStorage.setItem('correoSuscrito', correo);
    alert('¡Gracias por suscribirte!');
  }
}
