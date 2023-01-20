formDia = document.getElementById("formSelectDateReserva");
formHorario = document.getElementById("selectHorarioReserva");

let usuario = recuperarUsuario(sessionStorage);

btnReservarCarrito.addEventListener('click',() => {
dia = formDia.value
horario = formHorario.value

if(horario == "null"){
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