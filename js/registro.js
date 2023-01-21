let input_name = document.getElementById("Input-name");
let input_user = document.getElementById("Input-user");
let input_pass = document.getElementById("Input-pass");
let input_pass2 = document.getElementById("Input-pass2");
let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !input_name.value ||
    !input_user.value ||
    !input_pass.value ||
    !input_pass2.value
  ) {
    Swal.fire(
      '',
      'Todos los campos son requeridos',
      'warning'
    )
  } else {
    if (input_pass.value != input_pass2.value) {
      Swal.fire(
        '',
        'Las contraseñas ingresadas no coinciden',
        'error'
      )
    } else {
      new_user = new Usuario(
        input_name.value,
        input_user.value,
        input_pass.value,
        "docente"
      );
      console.log(new_user);
      let arrayUsuarios = JSON.parse(localStorage.getItem("usuariosBD"));
      arrayUsuarios.push(new_user);
      localStorage.setItem("usuariosBD", JSON.stringify(arrayUsuarios));
      Swal.fire(
        '',
        'Registro existoso',
        'success'
      )
    }
  }
});
