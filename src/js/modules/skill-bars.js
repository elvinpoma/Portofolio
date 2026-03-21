/* ============================================================
   MÓDULO: BARRAS DE HABILIDAD
============================================================ */
const moduloBarrasHabilidad = (() => {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        const porcentaje = entrada.target.dataset.porcentaje;
        entrada.target.style.width = porcentaje + '%';
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.5 });

  const inicializar = () => {
    document.querySelectorAll('.barra-habilidad__relleno')
      .forEach(barra => observador.observe(barra));
  };

  return { inicializar };
})();
