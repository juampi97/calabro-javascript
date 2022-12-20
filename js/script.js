let operation;

let proyectoresReserved = [];
let notebooksReserved = [];

// Clases

class Proyector {
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

//Simulo BD

const proyectores = [
  new Proyector("VIEW1", "VIEWSONIC", "MOD1", "SN001", 1, 0),
  new Proyector("VIEW2", "VIEWSONIC", "MOD1", "SN002", 0, 1),
  new Proyector("BENQ1", "BENQ", "MOD2", "SN003", 1, 0),
  new Proyector("BENQ2", "BENQ", "MOD3", "SN004", 1, 1),
];
const notebooks = [
  new Notebook("CR2", "CR", "MOD1", "SN006", 0, 1),
  new Notebook("CR1", "CR", "MOD1", "SN005", 1, 0),
  new Notebook("LENOVO1", "LENOVO", "MOD7", "SN003", 1, 0),
  new Notebook("LENOVO2", "LENOVO", "MOD8", "SN004", 1, 1),
];

//Funciones

function operationIn() {
  let tipoOperacion = prompt(
    "¡Bienvenido! Ingrese:\n0 - para registrar un producto\n1 - para consultar disponibilidad de productos\n2 - busqueda con filtro especifico\n3 - para reservar un producto\n4 - para devolver un producto (valido unicamente si se realizo un reserva previamente)\nESC -  para terminar la operacion"
  );
  tipoOperacion = tipoOperacion.toUpperCase();
  selectOperacion(tipoOperacion);
  return tipoOperacion;
}

function selectOperacion(dato) {
  switch (dato) {
    case "0":
      registrar();
      break;
    case "1":
      consulta();
      break;
    case "2":
      busquedaFiltrado();
      break;  
    case "3":
      reserva();
      break;
    case "4":
      devolucion();
      break;
    case "ESC":
      return dato;
    default:
      alert("Operacion no valida");
      operationIn();
      break;
  }
}

function registrar() {
  let cod_rec, marca, modelo, sn, vga, hdmi;
  tipoDispositivo = prompt(
    "Ingrese:\nP - para registrar un proyector\nN - para registrar una notebook\nESC - para terminar la operacion"
  );
  switch (tipoDispositivo.toUpperCase()) {
    case "N":
      cod_rec = prompt(" Ingrese CODIGO DE RECURSO de la notebook a registrar");
      marca = prompt(" Ingrese MARCA de la notebook a registrar");
      modelo = prompt(" Ingrese MODELO de la notebook a registrar");
      sn = prompt(" Ingrese SN de la notebook a registrar");
      vga = prompt(
        " Ingrese:" +
          "\n" +
          "'0' si la notebook tiene entrada VGA" +
          "\n" +
          "'1' si la notebook tiene entrada VGA"
      );
      while (vga != "0" && vga != "1") {
        alert("Error dato ingreso invalido");
        vga = prompt(
          " Ingrese:" +
            "\n" +
            "'0' si la notebook tiene entrada VGA" +
            "\n" +
            "'1' si la notebook tiene entrada VGA"
        );
      }
      hdmi = prompt(
        " Ingrese:" +
          "\n" +
          "'0' si la notebook tiene entrada HDMI" +
          "\n" +
          "'1' si la notebook tiene entrada HDMI"
      );
      while (hdmi != "0" && hdmi != "1") {
        alert("Error dato ingreso invalido");
        hdmi = prompt(
          " Ingrese:" +
            "\n" +
            "'0' si la notebook tiene entrada HDMI" +
            "\n" +
            "'1' si la notebook tiene entrada HDMI"
        );
      }

      const newNotebook = new Notebook(cod_rec, marca, modelo, sn, vga, hdmi);
      notebooks.push(newNotebook);
      break;
    case "P":
      cod_rec = prompt(" Ingrese CODIGO DE RECURSO del proyector a registrar");
      marca = prompt(" Ingrese MARCA del proyector a registrar");
      modelo = prompt(" Ingrese MODELO del proyector a registrar");
      sn = prompt(" Ingrese SN del proyector a registrar");
      vga = prompt(
        " Ingrese:" +
          "\n" +
          "'0' si el proyector tiene entrada VGA" +
          "\n" +
          "'1' si el proyector tiene entrada VGA"
      );
      while (vga != "0" && vga != "1") {
        alert("Error dato ingreso invalido");
        vga = prompt(
          " Ingrese:" +
            "\n" +
            "'0' si el proyector tiene entrada VGA" +
            "\n" +
            "'1' si el proyector tiene entrada VGA"
        );
      }
      hdmi = prompt(
        " Ingrese:" +
          "\n" +
          "'0' si el proyector tiene entrada HDMI" +
          "\n" +
          "'1' si el proyector tiene entrada HDMI"
      );
      while (hdmi != "0" && hdmi != "1") {
        alert("Error dato ingreso invalido");
        hdmi = prompt(
          " Ingrese:" +
            "\n" +
            "'0' si el proyector tiene entrada HDMI" +
            "\n" +
            "'1' si el proyector tiene entrada HDMI"
        );
      }

      const newProyector = new Proyector(cod_rec, marca, modelo, sn, vga, hdmi);
      proyectores.push(newProyector);
      break;
    case "ESC":
      return tipoDispositivo;
    default:
      alert("Error, consulta no valida");
      registrar();
  }
}

function consulta() {
  let tipoDispositivo;
  tipoDispositivo = prompt(
    "Ingrese:\nP - para consultar stock de proyectores\nN - para consultar stock de notebooks\nESC - para terminar la operacion"
  );
  switch (tipoDispositivo.toUpperCase()) {
    case "N":
      alert(
        "Notebooks en stock:\n" +
          crearStringConsulta(notebooks) +
          "\nNotebooks reservadas:\n" +
          crearStringConsulta(notebooksReserved)
      );
      break;
    case "P":
      alert(
        "Proyectores en stock\n" +
          crearStringConsulta(proyectores) +
          "\nProyectores reservados:\n" +
          crearStringConsulta(proyectoresReserved)
      );
      break;
    case "ESC":
      break;
    default:
      alert("Operacion no valida");
      consulta();
      break;
  }
}

function busquedaFiltrado(){
  let tipoDispositivo;
  tipoDispositivo = prompt(
    "Ingrese:\nP - para consultas sobre proyectores\nN - para consultas sobre notebooks\nESC - para terminar la operacion"
  );
  switch (tipoDispositivo.toUpperCase()) {
    case "N":
      consultaPuerto("N");
      break;
    case "P":
      consultaPuerto("P");
      break;
    case "ESC":
      break;
    default:
      alert("Operacion no valida");
      consulta();
      break;
  }
}
function consultaPuerto(dato){
  let tipoPuerto;
  let arrayResultado
  tipoPuerto = prompt(
    "Ingrese:\nHDMI - para ver elementos con salida HDMI disponible\nVGA - para ver elementos con salida VGA disponible\nESC - para terminar la operacion"
  );
  switch (tipoPuerto.toUpperCase()) {
    case "HDMI":
      arrayResultado = filtradoHDMI(dato);
      alert(crearStringConsulta(arrayResultado));
      break;
    case "VGA":
      arrayResultado = filtradoVGA(dato);
      alert(crearStringConsulta(arrayResultado));
      break;
    case "ESC":
      break;
    default:
      alert("Operacion no valida");
      consulta();
      break;
  }
}

function filtradoHDMI(dato){
  let arrayResultado;
  switch(dato){
    case "N":
      arrayResultado = notebooks.filter( (elemento) => elemento.hdmi == 1 );
      return arrayResultado;
    case "P":
      arrayResultado = proyectores.filter( (elemento) => elemento.hdmi == 1 );
      return arrayResultado;
  }
}

function filtradoVGA(dato){
  let arrayResultado;
  switch(dato){
    case "N":
      arrayResultado = notebooks.filter( (elemento) => elemento.vga == 1 );
      return arrayResultado;
    case "P":
      arrayResultado = proyectores.filter( (elemento) => elemento.vga == 1 );
      return arrayResultado;
  }
}

function reserva() {
  let tipoDispositivo;
  tipoDispositivo = prompt(
    "Ingrese:\nP - para la reserva de un proyector\nN - para la reserva de una notebook\nESC - para terminar la operacion"
  );
  switch (tipoDispositivo.toUpperCase()) {
    case "N":
      if (notebooks.length > 0) {
        notebooksReserved.push(notebooks[notebooks.length - 1]);
        notebooks.pop();
        alert("Reserva de una notebook efectuada");
      } else {
        alert("No hay notebooks en stock");
      }
      break;
    case "P":
      if (proyectores.length > 0) {
        proyectoresReserved.push(proyectores[proyectores.length - 1]);
        proyectores.pop();
        alert("Reserva de un proyector efectuada");
      } else {
        alert("No hay proyectores en stock");
      }
      break;
    case "ESC":
      break;
    default:
      alert("Operacion no valida");
      reserva();
      break;
  }
}

function devolucion() {
  let tipoDispositivo;
  if (proyectoresReserved.length > 0 && notebooksReserved.length > 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'P' para devolver un proyector" +
        "\n" +
        "'N' para devolver una notebook" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    switch (tipoDispositivo.toUpperCase()) {
      case "N":
        notebooks.push(notebooksReserved[notebooksReserved.length - 1]);
        notebooksReserved.pop();
        alert("Devolucion de notebook efectuada");
        break;
      case "P":
        proyectores.push(proyectoresReserved[proyectoresReserved.length - 1]);
        proyectoresReserved.pop();
        alert("Devolucion de proyector efectuada");
        break;
      case "ESC":
        break;
    }
  } else if (proyectoresReserved.length > 0 && notebooksReserved.length == 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'P' para devolver un proyector" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    switch (tipoDispositivo.toUpperCase()) {
      case "P":
        proyectores.push(proyectoresReserved[proyectoresReserved.length - 1]);
        proyectoresReserved.pop();
        alert("Devolucion de proyector efectuada");
      case "ESC":
        break;
      default:
        alert("Error, devolucion no valida");
        devolucion();
    }
  } else if (proyectoresReserved.length == 0 && notebooksReserved.length > 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'N' para devolver una notebook" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    switch (tipoDispositivo.toUpperCase()) {
      case "N":
        notebooks.push(notebooksReserved[notebooksReserved.length - 1]);
        notebooksReserved.pop();
        alert("Devolucion de notebook efectuada");
      case "ESC":
        break;
      default:
        alert("Operacion no valida");
        devolucion();
        break;
    }
  } else {
    alert(
      "No se efectuo ninguna reserva previa, no hay unidades para devolver"
    );
  }
}

function crearStringConsulta(array) {
  let infoConsulta = "";
  let arrayOrdenado = array.slice(0);

  arrayOrdenado = ordenarArray(arrayOrdenado);

  arrayOrdenado.forEach((elemento) => {
    infoConsulta += `
    Codigo de recurso: ${elemento.cod_rec}
    Marca: ${elemento.marca}
    Modelo: ${elemento.modelo}
    VGA: ${elemento.salidaVGA()}
    HDMI: ${elemento.salidaHDMI()}
    `;
  });
  return infoConsulta;
}

function ordenarArray(array) {
  let arrayOrdenado = array.sort((a, b) => a.cod_rec.localeCompare(b.cod_rec));
  return arrayOrdenado;
}

//Programa

while (operationIn() != "ESC") {}
alert("Adios!");
