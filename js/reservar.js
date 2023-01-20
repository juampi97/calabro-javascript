formDia = document.getElementById("selectDateReserva");
formHorario = document.getElementById("selectHorarioReserva");

let usuario = recuperarUsuario(sessionStorage);

btnReservarCarrito.addEventListener('click',() => {

day = formDia.value
vectorDay = day.split('-')
dia = `${vectorDay[2]}/${vectorDay[1]}/${vectorDay[0]}` 
horario = formHorario.value

if(horario == "null" || day == "" ){
    Swal.fire(
        '',
        'Seleccione la fecha en la que desea realizar la reserva',
        'warning'
      )
}else{
    Swal.fire(
        '',
        `${usuario.name}, se realizó la reserva para el dia ${dia} en el turno de ${horario}.`,
        'success'
      )
}
})