/* ============================================================
   MÓDULO: EFECTO PARALLAX (OPTIMIZADO)
============================================================ */
const moduloParallax = (() => {
  let frameId = null;
  let desplazamientoScroll = 0;
  let parametrosCachados = [];

  const actualizarParallax = () => {
    parametrosCachados.forEach(({ elemento, velocidad }) => {
      const traslacion = desplazamientoScroll * velocidad;
      elemento.style.transform = `translateY(${traslacion}px)`;
    });
    frameId = null;
  };

  const manejarScroll = () => {
    desplazamientoScroll = window.scrollY;
    
    // Usar requestAnimationFrame para optimizar rendimiento
    if (!frameId) {
      frameId = requestAnimationFrame(actualizarParallax);
    }
  };

  const inicializar = () => {
    // Cachear elementos y velocidades al inicializar
    document.querySelectorAll('.paralaje').forEach(elemento => {
      const velocidad = parseFloat(elemento.dataset.velocidadParalaje || 0.2);
      parametrosCachados.push({ elemento, velocidad });
    });

    window.addEventListener('scroll', manejarScroll, { passive: true });
  };

  return { inicializar };
})();
