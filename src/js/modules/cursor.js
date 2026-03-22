/* ============================================================
   MÓDULO: CURSOR PERSONALIZADO
============================================================ */
const moduloCursor = (() => {
  const cursorPunto  = document.getElementById('cursorPunto');
  const cursorAnillo = document.getElementById('cursorAnillo');
  let posicionX = 0, posicionY = 0;
  let anilloX   = 0, anilloY   = 0;
  let frameId = null;
  let ultimoTiempo = 0;

  const moverCursorPunto = (evento) => {
    const ahora = Date.now();
    
    // Throttle para optimizar rendimiento: máximo 60fps
    if (ahora - ultimoTiempo < 16) return;
    ultimoTiempo = ahora;

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
    frameId = requestAnimationFrame(animarAnillo);
  };

  const manejarElementos = (evento) => {
    const elemento = evento.target;
    const elementosInteractivos = ['A', 'BUTTON'] || 
                                   elemento.classList.contains('tarjeta-proyecto') ||
                                   elemento.classList.contains('boton-tema');
    
    if (elemento.hasAttribute('href') || 
        elemento.tagName === 'BUTTON' || 
        elemento.closest('a, button, .tarjeta-proyecto, .boton-tema')) {
      if (evento.type === 'mouseenter') {
        document.body.classList.add('cursor-expandido');
      } else if (evento.type === 'mouseleave') {
        document.body.classList.remove('cursor-expandido');
      }
    }
  };

  const inicializar = () => {
    if (window.innerWidth <= 768) return;
    
    document.addEventListener('mousemove', moverCursorPunto);
    animarAnillo();
    
    // Event delegation para hover effects
    document.addEventListener('mouseenter', manejarElementos, true);
    document.addEventListener('mouseleave', manejarElementos, true);
  };

  return { inicializar };
})();
