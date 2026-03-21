/* ============================================================
   MÓDULO: EFECTO PARALLAX
============================================================ */
const moduloParallax = (() => {
  const manejarScroll = () => {
    const desplazamientoScroll = window.scrollY;
    document.querySelectorAll('.paralaje').forEach(elemento => {
      const velocidad   = parseFloat(elemento.dataset.velocidadParalaje || 0.2);
      const traslacion  = desplazamientoScroll * velocidad;
      elemento.style.transform = `translateY(${traslacion}px)`;
    });
  };

  const inicializar = () => {
    window.addEventListener('scroll', manejarScroll, { passive: true });
  };

  return { inicializar };
})();
