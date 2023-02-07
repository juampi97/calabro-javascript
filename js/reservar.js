formDia = document.getElementById("selectDateReserva");
formHorario = document.getElementById("selectHorarioReserva");

function today() {
  let date = new Date();

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  hoy = `${year}-${month}-${day}`
  return hoy;
}

function addDays(date, days) {
  var result = new Date();
  result.setDate(result.getDate() + days);
  let month = result.getMonth() + 1;
  let day = result.getDate();
  let year = result.getFullYear();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  hoy = `${year}-${month}-${day}`
  return(hoy);
}

formDia.value = today();
formDia.min = today();
formDia.max = addDays(today(),5);

btnReservarCarrito.addEventListener("click", () => {
  let usuario = recuperarUsuario(sessionStorage);

  day = formDia.value;
  vectorDay = day.split("-");
  dia = `${vectorDay[2]}/${vectorDay[1]}/${vectorDay[0]}`;
  horario = formHorario.value;

  if (horario == "null" || day == "") {
    Swal.fire(
      "",
      "Seleccione la fecha en la que desea realizar la reserva",
      "warning"
    );
  } else {
    Swal.fire(
      "",
      `${usuario.name}, se realizó la reserva para el dia ${dia} en el turno de ${horario}.`,
      "success"
    );
  }
});
