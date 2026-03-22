/* ============================================================
   MÓDULO: BARRA DE PROGRESO DE SCROLL (OPTIMIZADO)
============================================================ */
const moduloBarraProgreso = (() => {
  const barra = document.getElementById('barraProgreso');
  let frameId = null;

  const actualizarProgreso = () => {
    const alturaTotal    = document.documentElement.scrollHeight - window.innerHeight;
    const porcentajeScroll = (window.scrollY / alturaTotal) * 100;
    barra.style.width = porcentajeScroll + '%';
    frameId = null;
  };

  const manejarScroll = () => {
    // Usar requestAnimationFrame para optimizar rendimiento
    if (!frameId) {
      frameId = requestAnimationFrame(actualizarProgreso);
    }
  };

  const inicializar = () => {
    window.addEventListener('scroll', manejarScroll, { passive: true });
  };

  return { inicializar };
})();
