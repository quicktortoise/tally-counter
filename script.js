(function () {
  const counter = document.querySelector('.contador');

  /* Cuenta actual */
  let count = 0;

  /* Capturar toque en la pantalla o clic en la página para aumentar la cuenta actual en 1 */
  document.addEventListener('click', () => counter.innerText = ++count);

  /* Capturar activación del botón "Restablecer" para establecer la cuenta actual en -1.
  *  Al capturarse el evento de clic global (document), la cuenta actual será 0 */
  document.querySelector('.boton-restablecer').addEventListener('click', () => count = -1);

  counter.innerText = count;
})();
