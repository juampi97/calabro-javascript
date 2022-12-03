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
    reservar(){
      this.stock = false;
    }

    devolver(){
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
      break;
    default:
      return 0;
      break;
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

        const notebook1 = new Notebook(cod_rec, marca, modelo, sn, vga, hdmi);
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

        proyector1 = new Proyector(cod_rec, marca, modelo, sn, vga, hdmi);
        break;
      }
    } else {
      alert("Error, consulta no valida");
      registrar();
    }
  }
  
  // Programa principal
  
//  registrar();

const proyector1 = new Proyector("view1", "viewsonic", "i", "sn00", 0, 0);
const proyector2 = new Proyector("view2", "viewsonic", "j", "sn01", 0, 0);
const proyector3 = new Proyector("benq1", "benq", "k", "sn02", 0, 0);
const proyector4 = new Proyector("benq2", "benq", "ñ", "sn03", 0, 0);

console.log(proyector1.stock);
proyector1.reservar();
console.log(proyector1.stock);
proyector1.devolver();
console.log(proyector1.stock);
