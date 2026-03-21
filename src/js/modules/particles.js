/* ============================================================
   MÓDULO: PARTÍCULAS FLOTANTES
============================================================ */
const moduloParticulas = (() => {
  const contenedor = document.getElementById('particulasFondo');
  const CANTIDAD_PARTICULAS = 18;

  const crearParticula = () => {
    const particula = document.createElement('div');
    particula.classList.add('particula');
    const tamano      = Math.random() * 4 + 2;
    const posX        = Math.random() * 100;
    const duracion    = Math.random() * 20 + 15;
    const retraso     = Math.random() * 15;
    particula.style.cssText = `
      width: ${tamano}px;
      height: ${tamano}px;
      left: ${posX}%;
      bottom: -10px;
      animation-duration: ${duracion}s;
      animation-delay: ${retraso}s;
    `;
    contenedor.appendChild(particula);
  };

  const inicializar = () => {
    Array.from({ length: CANTIDAD_PARTICULAS }).forEach(crearParticula);
  };

  return { inicializar };
})();
