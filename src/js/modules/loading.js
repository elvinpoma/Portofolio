/* ============================================================
   MÓDULO: PANTALLA DE CARGA (LOADING SCREEN)
   Controla la visualización/ocultamiento del loading screen
============================================================ */

const moduloLoading = (() => {
  // Estado interno
  let loadingScreen = null;
  let progressBar = null;
  let modulosCargados = 0;
  let mostrarProgreso = false;
  const tiemposAleatorios = [300, 500, 200, 400, 350];

  /**
   * Obtener elemento loading screen
   */
  const obtenerLoadingScreen = () => {
    return document.getElementById('loadingScreen');
  };

  /**
   * Obtener barra de progreso
   */
  const obtenerProgressBar = () => {
    return document.querySelector('.loading-progress-bar');
  };

  /**
   * Inicializar el módulo
   */
  const inicializar = () => {
    loadingScreen = obtenerLoadingScreen();
    progressBar = obtenerProgressBar();

    if (!loadingScreen) {
      console.warn('Loading screen element not found');
      return;
    }

    // Asegurar que el loading screen esté visible
    loadingScreen.classList.remove('oculto', 'fade-out');

    // Bloquear scroll mientras carga
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Esperar a que el navegador finalize el rendering
    // y luego verificar cuando todo esté listo
    simularCargaDatos();
  };

  /**
   * Simular progreso de carga de datos
   * En una aplicación real, esto sería reemplazado por
   * llamadas reales a APIs o verificación de recursos
   */
  const simularCargaDatos = () => {
    let tiempoAcumulado = 0;

    mostrarProgreso = true;
    if (progressBar && progressBar.parentElement) {
      progressBar.parentElement.classList.add('activo');
    }

    // Simular carga de cada módulo
    tiemposAleatorios.forEach((tiempo) => {
      setTimeout(() => {
        modulosCargados++;
        actualizarProgreso();
      }, tiempoAcumulado);
      tiempoAcumulado += tiempo;
    });

    // Después de que todos los módulos estén "cargados"
    // Esperar un poco más para la transición suave
    setTimeout(() => {
      completarCarga();
    }, tiempoAcumulado + 500);
  };

  /**
   * Actualizar barra de progreso visual
   */
  const actualizarProgreso = () => {
    if (progressBar && mostrarProgreso) {
      const porcentaje = (modulosCargados / tiemposAleatorios.length) * 100;
      progressBar.style.width = Math.min(porcentaje, 85) + '%';
    }
  };

  /**
   * Completar la carga y ocultar el loading screen
   */
  const completarCarga = () => {
    if (!loadingScreen) return;

    // Animar la finalización de la barra de progreso
    if (progressBar && mostrarProgreso) {
      progressBar.style.width = '100%';
    }

    // Pequeña espera para que se vea la barra completa
    setTimeout(() => {
      ocultarLoadingScreen();
    }, 400);
  };

  /**
   * Ocultar el loading screen con transición suave
   */
  const ocultarLoadingScreen = () => {
    if (!loadingScreen) return;

    // Usar fade-out para una transición más elegante
    loadingScreen.classList.add('fade-out');

    // Remover clase después de la animación
    setTimeout(() => {
      loadingScreen.classList.add('oculto');
      
      // Permitir scroll nuevamente
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';

      // Evento personalizado para que otros módulos sepan que el loading terminó
      window.dispatchEvent(new CustomEvent('loadingCompleto'));
    }, 800);
  };

  /**
   * Ocultar loading manualmente (para casos especiales)
   */
  const ocultarManualmente = (retardo = 0) => {
    if (retardo > 0) {
      setTimeout(ocultarLoadingScreen, retardo);
    } else {
      ocultarLoadingScreen();
    }
  };

  /**
   * Mostrar loading manualmente
   */
  const mostrar = () => {
    if (!loadingScreen) return;
    loadingScreen.classList.remove('oculto', 'fade-out');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  };

  /**
   * API pública
   */
  return {
    inicializar,
    ocultarManualmente,
    mostrar
  };
})();
