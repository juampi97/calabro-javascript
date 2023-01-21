class Proyector {
  constructor(cod_rec, marca, modelo, sn, vga, hdmi, estado) {
    this.cod_rec = cod_rec.toUpperCase();
    this.marca = marca.toUpperCase();
    this.modelo = modelo.toUpperCase();
    this.sn = sn.toUpperCase();
    this.vga = parseInt(vga);
    this.hdmi = parseInt(hdmi);
    this.estado = estado.toUpperCase();
  }
}

class Usuario {
  constructor(name, user, pass, tipo) {
    this.name = name;
    this.user = user;
    this.pass = pass;
    this.tipo = tipo.toUpperCase();
  }
}

//Simulo BD proyectores

let proyectores = [];
let marcaProyectores = [];
let codrecProyectores = [];

const pedirProyectores = async () => {
  const resp = await fetch("./proyectores.json");
  const data = await resp.json();
  data.forEach((prod) => {
    let newProyector = new Proyector(
      prod.cod_rec,
      prod.marca,
      prod.modelo,
      prod.sn,
      prod.vga,
      prod.hdmi,
      prod.estado
    );
    proyectores.push(newProyector);
    marcaProyectores.push(newProyector.marca)
    codrecProyectores.push(newProyector.cod_rec)
  });

};

//Simulo BD usuarios

let usuarios = [];

const pedirUsuarios = async () => {
  const resp = await fetch("./usuarios.json");
  const data = await resp.json();
  data.forEach((user) => {
    let newUsuario = new Usuario(user.name, user.user, user.pass, user.tipo);
    usuarios.push(newUsuario);
  });

  let arrayUsuarios = JSON.parse(localStorage.getItem("usuariosBD"));
  if (arrayUsuarios == null) {
    localStorage.setItem("usuariosBD", JSON.stringify(usuarios));
  }
};


// Funciones al cargar pagina

window.addEventListener("load", function () {
  pedirUsuarios();
  pedirProyectores();
});
