/* ============================================================
   MÓDULO: BARRA DE PROGRESO DE SCROLL
============================================================ */
const moduloBarraProgreso = (() => {
  const barra = document.getElementById('barraProgreso');

  const actualizarProgreso = () => {
    const alturaTotal    = document.documentElement.scrollHeight - window.innerHeight;
    const porcentajeScroll = (window.scrollY / alturaTotal) * 100;
    barra.style.width = porcentajeScroll + '%';
  };

  const inicializar = () => {
    window.addEventListener('scroll', actualizarProgreso, { passive: true });
  };

  return { inicializar };
})();
