class Proyector {
  constructor(cod_rec, marca, modelo, sn, vga, hdmi) {
    this.cod_rec = cod_rec.toUpperCase();
    this.marca = cod_rec.toUpperCase();
    this.modelo = cod_rec.toUpperCase();
    this.sn = sn.toUpperCase();
    this.vga = vga;
    this.hdmi = hdmi;
  }
}
class Notebook {
  constructor(cod_rec, marca, modelo, sn, vga, hdmi) {
    this.cod_rec = cod_rec.toUpperCase();
    this.marca = cod_rec.toUpperCase();
    this.modelo = cod_rec.toUpperCase();
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

        const proyector1 = new Proyector(cod_rec, marca, modelo, sn, vga, hdmi);
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

        const notebook1 = new Proyector(cod_rec, marca, modelo, sn, vga, hdmi);
        break;
    }
  } else {
    alert("Error, consulta no valida");
    registrar();
  }
}

// Programa principal

registrar();
console;
