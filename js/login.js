// Variable que indique si el usuario se logeo o no

 let usuarioLogeado;
// sessionStorage.setItem("usuarioLogeado", usuarioLogeado);

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
  //sessionStorage.clear();
  sessionStorage.removeItem("usuarioLogeado")
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
  };

  storage.setItem("usuarioLogeado", JSON.stringify(usuario));
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

function userlogin(usuario) {
  if (usuario) {
    saludar(usuario);
    presentarInfo(toggles, "d-none");
    funcionesAdmin(usuario);
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
    alert("Todos los campos son requeridos");
  } else {
    let data = validarUsuario(usuarios, userLogin.value, passLogin.value);
    if (!data) {
      alert(`Usuario y/o contraseña erróneos`);
    } else {
      guardarDatos(data, sessionStorage);
      modal.hide();
      usuarioLogeado = true;
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
});

userlogin(recuperarUsuario(sessionStorage));