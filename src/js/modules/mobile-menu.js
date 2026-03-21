/* ============================================================
   MÓDULO: MENÚ MÓVIL
============================================================ */
const moduloMenuMovil = (() => {
  const botonMenu   = document.getElementById('botonMenuMovil');
  const menuEnlaces = document.getElementById('menuNavegacion');

  const alternarMenu = () => {
    const estaAbierto = menuEnlaces.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', String(estaAbierto));
  };

  const cerrarAlNavegar = () => {
    menuEnlaces.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', 'false');
  };

  const inicializar = () => {
    botonMenu.addEventListener('click', alternarMenu);
    menuEnlaces.querySelectorAll('a')
      .forEach(enlace => enlace.addEventListener('click', cerrarAlNavegar));
  };

  return { inicializar };
})();
