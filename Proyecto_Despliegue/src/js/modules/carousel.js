/* ============================================================
   MÓDULO: CARRUSEL (DUPLICAR TARJETAS PARA LOOP INFINITO)
============================================================ */
const moduloCarrusel = (() => {
  const inicializar = () => {
    const pista = document.getElementById('pistadelCarrusel');
    if (!pista) return;
    const tarjetasOriginales = Array.from(pista.children);
    tarjetasOriginales.forEach(tarjeta => {
      const clon = tarjeta.cloneNode(true);
      clon.setAttribute('aria-hidden', 'true');
      pista.appendChild(clon);
    });
  };

  return { inicializar };
})();
