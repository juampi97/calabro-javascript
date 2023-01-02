let input_name = document.getElementById('Input-name')
let input_user = document.getElementById('Input-user')
let input_pass = document.getElementById('Input-pass')
let input_pass2 = document.getElementById('Input-pass2')
let btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener('click',(e) => {
    e.preventDefault();
    if(!input_name.value || !input_user.value || !input_pass.value || !input_pass2.value){
        alert("Todos los campos son requeridos");
    }else{
        if(input_pass.value != input_pass2.value){
            alert("Las contraseñas ingresadas no coinciden")
        }
        else{
            new_user = new Usuario(input_name.value, input_user.value, input_pass.value, "docente")
            let arrayUsuarios = JSON.parse(
                localStorage.getItem("usuariosBD")
              );
              arrayUsuarios.push(new_user);
              localStorage.setItem("usuariosBD", JSON.stringify(arrayUsuarios));
            alert("Registro exitoso")
        }
    }
})