const proyectores = [];
const notebooks = [];

class Proyector {
  constructor(cod_rec, marca, modelo, sn, vga, hdmi) {
    this.cod_rec = cod_rec.toUpperCase();
    this.marca = marca.toUpperCase();
    this.modelo = modelo.toUpperCase();
    this.sn = sn.toUpperCase();
    this.vga = vga;
    this.hdmi = hdmi;
    this.stock = true;
  }
  reservar() {
    this.stock = false;
  }

  devolver() {
    this.stock = true;
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

function validarNPE(dato) {
  switch (dato) {
    case "N":
    case "P":
    case "ESC":
      return 1;
    default:
      return 0;
  }
}

function registrar() {
  let cod_rec, marca, modelo, sn, vga, hdmi;
  tipoDispositivo = prompt(
    "Ingrese:" +
      "\n" +
      "'P' para registrar un proyector" +
      "\n" +
      "'N' para registrar una notebook" +
      "\n" +
      "'ESC' para terminar la operacion"
  );
  if (validarNPE(tipoDispositivo)) {
    switch (tipoDispositivo) {
      case "N":
        cod_rec = prompt(
          " Ingrese CODIGO DE RECURSO de la notebook a registrar"
        );
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
        cod_rec = prompt(
          " Ingrese CODIGO DE RECURSO del proyector a registrar"
        );
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

        const newProyector = new Proyector(
          cod_rec,
          marca,
          modelo,
          sn,
          vga,
          hdmi
        );
        proyectores.push(newProyector);
        break;
      case "ESC":
        return tipoDispositivo;
    }
  } else {
    alert("Error, consulta no valida");
  }
}

// Programa principal

dataIn = registrar();
while (dataIn != "ESC") {
  dataIn = registrar();
}
notebooks.pop();
if(notebooks.length > 0){
  console.log(notebooks);
}
if(proyectores.length > 0){
  console.log(proyectores);
}
for (const producto of proyectores) {
  console.log(producto.cod_rec);
  console.log(producto.marca);
}