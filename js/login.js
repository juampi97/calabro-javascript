// Traigo elementos del DOM - Modal
let userLogin = document.getElementById("userLogin");
let passLogin = document.getElementById("passLogin");
let btnLogin = document.getElementById("btnLogin");
let btnLogout = document.getElementById("btnLogout");
let modalLogin = document.getElementById("modalLogin");
let modal = new bootstrap.Modal(modalLogin);
let toggles = document.querySelectorAll(".toggles");

// Borrar datos storage

function borrarDatos() {
//   localStorage.clear();
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
    name: usuarioDB.nombre,
    user: usuarioDB.mail,
    pass: usuarioDB.pass,
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

function estaLogueado(usuario) {
  if (usuario) {
    saludar(usuario);
    presentarInfo(toggles, "d-none");
  }
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
      //Recién ahora cierro el cuadrito de login
      modal.hide();
      //Muestro la info para usuarios logueados
      estaLogueado(data);
    }
  }
});

// Evento click boton logout

btnLogout.addEventListener("click", () => {
  borrarDatos();
  presentarInfo(toggles, "d-none");
});
