(function () {
  const counter = document.querySelector(".counter");
  const btnCopy = document.getElementById("btn-copy");
  const btnReset = document.getElementById("btn-reset");
  const footerElements = [
    document.querySelector("footer a"),
    document.querySelector("footer img.lighting-light"),
    document.querySelector("footer img.lighting-dark"),
  ];

  // Cuenta actual
  let count = 0;

  // Capturar toque en la pantalla, o clic en la página
  document.addEventListener("click", (e) => {
    // Para aumentar la cuenta actual en 1, excepto cuando el evento
    // haya sido lanzado desde los botones.
    if (
      e.target !== btnCopy &&
      e.target !== btnReset &&
      footerElements.every((element) => e.target !== element)
    )
      ++count;

    // Para copiar el número actual al portapapeles.
    if (e.target === btnCopy) navigator.clipboard.writeText(count);

    // Para establecer la cuenta actual en -1.
    if (e.target === btnReset) count = 0;

    counter.innerText = count;
  });
})();
