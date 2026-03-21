/* ============================================================
   MÓDULO: EFECTO TIPEO EN HERO
============================================================ */
const moduloEfectoTipeo = (() => {
  const PALABRAS_ROTACION = [
    'Multi Plataforma',
    'Android',
    'con Kotlin',
    'con JavaScript',
    'Impulsado por IA',
  ];
  let indicePalabraActual = 0;
  let indiceCaracter      = 0;
  let estaEscribiendo     = true;

  const elementoTipeo = document.getElementById('textoTipeo');

  const ejecutarPaso = () => {
    const palabraActual = PALABRAS_ROTACION[indicePalabraActual];

    if (estaEscribiendo) {
      elementoTipeo.textContent = palabraActual.substring(0, indiceCaracter + 1);
      indiceCaracter++;
      if (indiceCaracter === palabraActual.length) {
        estaEscribiendo = false;
        setTimeout(ejecutarPaso, 2200);
        return;
      }
      setTimeout(ejecutarPaso, 90);
    } else {
      elementoTipeo.textContent = palabraActual.substring(0, indiceCaracter - 1);
      indiceCaracter--;
      if (indiceCaracter === 0) {
        estaEscribiendo = true;
        indicePalabraActual = (indicePalabraActual + 1) % PALABRAS_ROTACION.length;
        setTimeout(ejecutarPaso, 400);
        return;
      }
      setTimeout(ejecutarPaso, 50);
    }
  };

  const inicializar = () => {
    if (!elementoTipeo) return;
    setTimeout(ejecutarPaso, 1200);
  };

  return { inicializar };
})();
