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
  salidaHDMI() {
    if (this.hdmi) {
      return "Disponible";
    } else {
      return "No disponible";
    }
  }
  salidaVGA() {
    if (this.vga) {
      return "Disponible";
    } else {
      return "No disponible";
    }
  }
}
class Notebook {
  constructor(cod_rec, marca, modelo, sn, vga, hdmi) {
    this.cod_rec = cod_rec.toUpperCase();
    this.marca = marca.toUpperCase();
    this.modelo = modelo.toUpperCase();
    this.sn = sn.toUpperCase();
    this.vga = parseInt(vga);
    this.hdmi = parseInt(hdmi);
  }
  salidaHDMI() {
    if (this.hdmi) {
      return "Disponible";
    } else {
      return "No disponible";
    }
  }
  salidaVGA() {
    if (this.vga) {
      return "Disponible";
    } else {
      return "No disponible";
    }
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

//Simulo BD

const usuarios = [
  new Usuario("Juan Pablo", "juampi", "12345", "administrador"),
  new Usuario("Nicolas", "nicolas", "12345", "docente"),
];

// const proyectores = [
//   new Proyector("VIEW1", "VIEWSONIC", "MOD1", "SN001", 1, 0),
//   new Proyector("VIEW2", "VIEWSONIC", "MOD1", "SN002", 0, 1),
//   new Proyector("BENQ1", "BENQ", "MOD2", "SN003", 1, 0),
//   new Proyector("BENQ2", "BENQ", "MOD3", "SN004", 1, 1),
// ];
const proyectoresStock = [
  new Proyector("VIEW1", "VIEWSONIC", "MOD1", "SN001", 1, 0,"DISPONIBLE"),
  new Proyector("VIEW2", "VIEWSONIC", "MOD1", "SN002", 0, 1,"DISPONIBLE"),
  new Proyector("BENQ1", "BENQ", "MOD2", "SN003", 1, 0,"DISPONIBLE"),
  new Proyector("BENQ2", "BENQ", "MOD3", "SN004", 1, 1,"DISPONIBLE"),
];

let proyectores = proyectoresStock.slice(0)

const notebooks = [
  new Notebook("CR2", "CR", "MOD1", "SN006", 0, 1),
  new Notebook("CR1", "CR", "MOD1", "SN005", 1, 0),
  new Notebook("LENOVO1", "LENOVO", "MOD7", "SN003", 1, 0),
  new Notebook("LENOVO2", "LENOVO", "MOD8", "SN004", 1, 1),
];

// Genero arrays para forms Proyectores

let marcaProyectores = [];
let codrecProyectores = [];

proyectoresStock.forEach((elemento) => {
  marcaProyectores.push(elemento.marca);
});
marcaProyectores = [...new Set(marcaProyectores)];

proyectoresStock.forEach((elemento) => {
  codrecProyectores.push(elemento.cod_rec);
});

// Genero arrays para forms Notebooks

let marcaNotebooks = [];
let codrecNotebooks = [];

notebooks.forEach((elemento) => {
  marcaNotebooks.push(elemento.marca);
});
marcaNotebooks = [...new Set(marcaNotebooks)];

notebooks.forEach((elemento) => {
  codrecNotebooks.push(elemento.cod_rec);
});

// Agrego BD al storage

window.addEventListener("load", function () {
  let arrayUsuarios = JSON.parse(
    localStorage.getItem("usuariosBD")
  );
  if(arrayUsuarios == null){
    localStorage.setItem("usuariosBD", JSON.stringify(usuarios));
  }
  localStorage.setItem("proyectores", JSON.stringify(proyectores));
})