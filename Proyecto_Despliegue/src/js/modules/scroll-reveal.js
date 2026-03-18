/* ============================================================
   MÓDULO: SCROLL REVEAL (INTERSECTION OBSERVER)
============================================================ */
const moduloScrollReveal = (() => {
  const opcionesObservador = {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  };

  const activarElemento = (entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('revelar--visible');
      observador.unobserve(entrada.target);
    }
  };

  const observador = new IntersectionObserver(
    (entradas) => entradas.forEach(activarElemento),
    opcionesObservador
  );

  const inicializar = () => {
    document.querySelectorAll('.revelar')
      .forEach(elemento => observador.observe(elemento));
  };

  return { inicializar };
})();
