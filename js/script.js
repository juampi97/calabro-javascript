let operation;

// const proyectores = [
//   new Proyector('VIEW1','VIEWSONIC','MOD1','SN001',1,0),
//   new Proyector('VIEW2','VIEWSONIC','MOD1','SN002',0,1),
//   new Proyector('BENQ1','BENQ','MOD2','SN003',1,0),
//   new Proyector('BENQ2','BENQ','MOD3','SN004',1,1),
// ];
// const notebooks = [
//   new Proyector('CR1','CR','MOD1','SN005',1,0),
//   new Proyector('CR2','CR','MOD1','SN006',0,1),
//   new Proyector('LENOVO1','LENOVO','MOD7','SN003',1,0),
//   new Proyector('LENOVO2','LENOVO','MOD8','SN004',1,1),
// ];

let proyectoresReserved = 0;
let notebooksReserved = 0;

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
}

//Funciones

function operationIn() {
  let tipoOperacion = prompt(
    "¡Bienvenido! Ingrese:\n0 - para registrar un producto\n1 - para consultar stock de un producto\n2 - para reservar un producto\n3 - para devolver un producto (valido unicamente si se realizo un reserva previamente)\nESC -  para terminar la operacion"
  );
  selectOperacion(tipoOperacion.toUpperCase());
  return tipoOperacion.toUpperCase();
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
      reserva();
      break;
    case "3":
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
          "'0' si la notebook no tiene entrada VGA" +
          "\n" +
          "'1' si la notebook no tiene entrada VGA"
      );
      hdmi = prompt(
        " Ingrese:" +
          "\n" +
          "'0' si la notebook no tiene entrada HDMI" +
          "\n" +
          "'1' si la notebook no tiene entrada HDMI"
      );

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
          "'0' si el proyector no tiene entrada VGA" +
          "\n" +
          "'1' si el proyector no tiene entrada VGA"
      );
      hdmi = prompt(
        " Ingrese:" +
          "\n" +
          "'0' si el proyector no tiene entrada HDMI" +
          "\n" +
          "'1' si el proyector no tiene entrada HDMI"
      );

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
      alert("Hay " + notebooks + " unidades en stock");
      break;
    case "P":
      alert("Hay " + proyectores + " unidades en stock");
      break;
    case "ESC":
      break;
    default:
      alert("Operacion no valida");
      consulta();
      break;
  }
}

function reserva() {
  let tipoDispositivo;
  tipoDispositivo = prompt(
    "Ingrese:\nP - para la reserva de un proyector\nN - para la reserva de una notebook\nESC - para terminar la operacion"
  );
  switch (tipoDispositivo.toUpperCase()) {
    case "N":
      if (notebooks > 0) {
        notebooks--;
        notebooksReserved++;
        console.log(notebooksReserved);
        alert("Reserva de una notebook efectuada");
      } else {
        alert("No hay notebooks en stock");
      }
      break;
    case "P":
      if (proyectores > 0) {
        proyectores--;
        proyectoresReserved++;
        console.log(proyectoresReserved);
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
  if (proyectoresReserved > 0 && notebooksReserved > 0) {
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
        notebooks++;
        notebooksReserved--;
        alert("Devolucion de notebook efectuada");
        break;
      case "P":
        proyectores++;
        proyectoresReserved--;
        alert("Devolucion de proyector efectuada");
        break;
      case "ESC":
        break;
    }
  } else if (proyectoresReserved > 0 && notebooksReserved == 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'P' para devolver un proyector" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    switch (tipoDispositivo.toUpperCase()) {
      case "P":
        proyectores++;
        proyectoresReserved--;
        alert("Devolucion de proyector efectuada");
      case "ESC":
        break;
      default:
        alert("Error, devolucion no valida");
        devolucion();
    }
  } else if (proyectoresReserved == 0 && notebooksReserved > 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'N' para devolver una notebook" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    switch (tipoDispositivo.toUpperCase()) {
      case "N":
        notebooks++;
        notebooksReserved--;
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

//Programa
while (operationIn() != "ESC") {}
alert("Adios!");
