function cambiarTurno() {
  let turno = 0;

  const turnoDisplay = document.getElementById(
    "turno-display"
  ) as HTMLDivElement;
  const botonAnterior = document.getElementById(
    "anterior-button"
  ) as HTMLButtonElement;
  const botonSiguiente = document.getElementById(
    "siguiente-button"
  ) as HTMLButtonElement;
  const botonReset = document.getElementById(
    "reset-button"
  ) as HTMLButtonElement;
  const turnoInput = document.getElementById("turno-input") as HTMLInputElement;
  const turnoBoton = document.getElementById(
    "turno-button"
  ) as HTMLButtonElement;

  function updateTurnoDisplay() {
    turnoDisplay.innerText = turno.toString().padStart(2, "0");
  }

  botonAnterior.addEventListener("click", () => {
    if (turno > 0) {
      turno--;
      updateTurnoDisplay();
    }
  });

  botonSiguiente.addEventListener("click", () => {
    turno++;
    updateTurnoDisplay();
  });

  botonReset.addEventListener("click", () => {
    turno = 0;
    updateTurnoDisplay();
  });

  turnoBoton.addEventListener("click", () => {
    const inputValue = parseInt(turnoInput.value, 10);
    if (!isNaN(inputValue)) {
      turno = inputValue;
      updateTurnoDisplay();
    }
  });

  updateTurnoDisplay();
}

cambiarTurno();
