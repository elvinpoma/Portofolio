/* ============================================================
   MÓDULO: TEMA (DARK / LIGHT)
============================================================ */
const moduloTema = (() => {
  const CLAVE_ALMACENAMIENTO = 'tema-preferido';
  const ATRIBUTO_TEMA        = 'data-tema';
  const TEMA_OSCURO          = 'oscuro';
  const TEMA_CLARO           = 'claro';

  const obtenerPreferenciaDelSistema = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? TEMA_OSCURO
      : TEMA_CLARO;

  const obtenerTemaGuardado = () =>
    localStorage.getItem(CLAVE_ALMACENAMIENTO);

  const aplicarTema = (tema) => {
    document.documentElement.setAttribute(ATRIBUTO_TEMA, tema);
    localStorage.setItem(CLAVE_ALMACENAMIENTO, tema);
  };

  const alternarTema = () => {
    const temaActual = document.documentElement.getAttribute(ATRIBUTO_TEMA);
    aplicarTema(temaActual === TEMA_OSCURO ? TEMA_CLARO : TEMA_OSCURO);
  };

  const inicializar = () => {
    const temaInicial = obtenerTemaGuardado() || obtenerPreferenciaDelSistema();
    aplicarTema(temaInicial);

    document.getElementById('botonTema')
      .addEventListener('click', alternarTema);

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (evento) => {
        if (!obtenerTemaGuardado()) {
          aplicarTema(evento.matches ? TEMA_OSCURO : TEMA_CLARO);
        }
      });
  };

  return { inicializar };
})();
