// Variable que indique si el usuario se logeo o no

let usuarioLogeado = false;
sessionStorage.setItem("usuarioLogeado", usuarioLogeado);

// Traigo elementos del DOM - Modal
let userLogin = document.getElementById("userLogin");
let passLogin = document.getElementById("passLogin");
let btnLogin = document.getElementById("btnLogin");
let btnLogout = document.getElementById("btnLogout");
let modalLogin = document.getElementById("modalLogin");
let modal = new bootstrap.Modal(modalLogin);
let toggles = document.querySelectorAll(".toggles");
let btnAdmin = document.getElementById("btnAdmin");

// Borrar datos storage

function borrarDatos() {
  // localStorage.clear();
  sessionStorage.clear();
}

// Validar usuario para login
function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => userDB.user == user);

  if (typeof encontrado === "undefined") {
    return false;
  } else {
    if (encontrado.pass != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

// Guardar datos sesion en storage

function guardarDatos(usuarioDB, storage) {
  const usuario = {
    name: usuarioDB.name,
    user: usuarioDB.user,
    pass: usuarioDB.pass,
    tipo: usuarioDB.tipo
  };

  storage.setItem("usuario", JSON.stringify(usuario));
}

// Presentar info usuario logueado

function saludar(usuario) {
  nombreUsuario.innerHTML = `<span>${usuario.name}</span>`;
}

function presentarInfo(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

function funcionesAdmin(usuario) {
  if (usuario.tipo == "ADMINISTRADOR") {
    btnAdmin.className = "nav-item dropdown";
  } else {
    btnAdmin.className = "nav-item dropdown d-none";
  }
}

// Mostrar alert permiso de reserva en carrito

function displayAlertPermisoReserva(){
  let alertUserLogeado = document.getElementById("alertUserNoRegistrado")
  alertUserLogeado.classList.toggle("d-none")
}

function displayNoneAlertPermisoReserva(){
  let alertUserLogeado = document.getElementById("alertUserNoRegistrado")
  alertUserLogeado.classList.toggle("d-none")
}

// Funciones al hacer login

function userlogin(usuario) {
  if (usuario) {
    usuarioLogeado = true;
    sessionStorage.setItem("usuarioLogeado", usuarioLogeado);
    saludar(usuario);
    presentarInfo(toggles, "d-none");
    funcionesAdmin(usuario);
    displayAlertPermisoReserva();
  }
}

// Recuperar datos storage

function recuperarUsuario(storage) {
  let usuarioEnStorage = JSON.parse(storage.getItem("usuario"));
  return usuarioEnStorage;
}

// Evento click boton login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (!userLogin.value || !passLogin.value) {
    Swal.fire(
      '',
      'Todos los campos son requeridos',
      'warning'
    )
  } else {
    let arrayUsuarios = JSON.parse(
      localStorage.getItem("usuariosBD")
    );
    let data = validarUsuario(arrayUsuarios, userLogin.value, passLogin.value);
    if (!data) {
      Swal.fire(
        '',
        'Usuario y/o contraseña erróneos',
        'error'
      )
      } else {
      guardarDatos(data, sessionStorage);
      modal.hide();
      usuarioLogeado = true;
      sessionStorage.setItem("usuarioLogeado", usuarioLogeado);
      userlogin(data);
    }
  }
});

// Evento click boton logout

btnLogout.addEventListener("click", () => {
  borrarDatos();
  presentarInfo(toggles, "d-none");
  btnAdmin.className = "nav-item dropdown d-none";
  usuarioLogeado = false;
  sessionStorage.setItem("usuarioLogeado", usuarioLogeado);
  displayNoneAlertPermisoReserva();
});

userlogin(recuperarUsuario(sessionStorage));

window.addEventListener("load", function () {
  let usuario = recuperarUsuario(sessionStorage);
  if(usuario != null){
    let btnAdmin = document.getElementById("btnAdmin");
    if (usuario.tipo == "ADMINISTRADOR") {
      btnAdmin.className = "nav-item dropdown";
    } else {
      btnAdmin.className = "nav-item dropdown d-none";
    }
  }
});
