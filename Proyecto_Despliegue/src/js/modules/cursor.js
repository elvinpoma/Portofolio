/* ============================================================
   MÓDULO: CURSOR PERSONALIZADO
============================================================ */
const moduloCursor = (() => {
  const cursorPunto  = document.getElementById('cursorPunto');
  const cursorAnillo = document.getElementById('cursorAnillo');
  let posicionX = 0, posicionY = 0;
  let anilloX   = 0, anilloY   = 0;

  const moverCursorPunto = (evento) => {
    posicionX = evento.clientX;
    posicionY = evento.clientY;
    cursorPunto.style.left = posicionX + 'px';
    cursorPunto.style.top  = posicionY + 'px';
  };

  const animarAnillo = () => {
    anilloX += (posicionX - anilloX) * 0.12;
    anilloY += (posicionY - anilloY) * 0.12;
    cursorAnillo.style.left = anilloX + 'px';
    cursorAnillo.style.top  = anilloY + 'px';
    requestAnimationFrame(animarAnillo);
  };

  const activarEfectoHover = () => {
    document.body.classList.add('cursor-expandido');
  };

  const desactivarEfectoHover = () => {
    document.body.classList.remove('cursor-expandido');
  };

  const inicializar = () => {
    if (window.innerWidth <= 768) return;
    document.addEventListener('mousemove', moverCursorPunto);
    animarAnillo();
    document.querySelectorAll('a, button, .tarjeta-proyecto, .boton-tema')
      .forEach(elemento => {
        elemento.addEventListener('mouseenter', activarEfectoHover);
        elemento.addEventListener('mouseleave', desactivarEfectoHover);
      });
  };

  return { inicializar };
})();
