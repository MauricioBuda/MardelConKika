function startCountdown() {
  const targetDate = new Date("2026-02-14T07:00:00");
  const originalTitle = "Mardel con kika 2026 ♥"; // título original

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate.getTime() - now;

    if (timeRemaining <= 0) {
      document.getElementById("countdown").innerText = "¡Nos fuimooooo!";
      document.getElementById("countdown-title").innerText = "";
      document.title = "¡Nos fuimooooo!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Actualizar el HTML
    document.getElementById("countdown").innerHTML =
      `${days} días ${hours} hs ${minutes} m ${seconds} s`;

    // Actualizar título según el tiempo restante
    const titleEl = document.getElementById("countdown-title");

    if (days <= 1) {
      titleEl.innerText = "Daleeeeeeeeeee!!";
    } else if (days <= 2) {
      titleEl.innerText = "Doooooooooos!";
    } else if (days <= 3) {
      titleEl.innerText = "Treeees!!";
    } else if (days <= 4) {
      titleEl.innerText = "Cuatrooo!!";
    }else if (days <= 5) {
      titleEl.innerText = "Cinco diaaaaas!!";
    }else if (days <= 7) {
      titleEl.innerText = "Menos de una semana perras!!";
    } else {
      titleEl.innerText = "Paciencia 🙄";
    }

    // Si la pestaña está inactiva, mostrar contador en el título
    if (document.hidden) {
      document.title = countdownText;
    } else {
      document.title = originalTitle;
    }
  };

  // Actualizar cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Detectar cambios de visibilidad
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      // Al salir de la pestaña, mostrar el contador
      // Se actualiza cada segundo de todas formas
    } else {
      // Al volver, restaurar el título original
      document.title = originalTitle;
    }
  });
}

// Iniciar
startCountdown();
