/* ============================================================
   PUNTO DE ENTRADA: INICIALIZAR TODOS LOS MÓDULOS
============================================================ */
const inicializarPortafolio = () => {
  // Inicializar loading screen primero
  moduloLoading.inicializar();

  // Inicializar todos los módulos
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

  // El loading screen se ocultará automáticamente después de 
  // la simulación de carga (ver moduloLoading para más detalles)
};

document.addEventListener('DOMContentLoaded', inicializarPortafolio);
