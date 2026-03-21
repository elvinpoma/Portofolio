/* ============================================================
   PUNTO DE ENTRADA: INICIALIZAR TODOS LOS MÓDULOS
============================================================ */
const inicializarPortafolio = () => {
  moduloTema.inicializar();
  moduloCursor.inicializar();
  moduloMenuMovil.inicializar();
  moduloScrollReveal.inicializar();
  moduloBarrasHabilidad.inicializar();
  moduloBarraProgreso.inicializar();
  moduloParallax.inicializar();
  moduloCarrusel.inicializar();
  moduloEfectoTipeo.inicializar();
  moduloParticulas.inicializar();
};

document.addEventListener('DOMContentLoaded', inicializarPortafolio);
