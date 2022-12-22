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

let adicionalHDMI = 5;
let adicionalZapatilla = 10;

