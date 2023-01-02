let input_name = document.getElementById('Input-name')
let input_user = document.getElementById('Input-user')
let input_pass = document.getElementById('Input-pass')
let input_pass2 = document.getElementById('Input-pass2')
let btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener('click',(e) => {
    e.preventDefault();
    if(!input_name || !input_user || !input_pass || !input_pass2){
        alert("Todos los campos son requeridos");
    }else{
        if(input_pass != input_pass2){
            alert("Las contraseñas ingresadas no coinciden")
        }
    }
})