let Input_cod_rec = document.getElementById("Input-cod_rec");
let Input_marca = document.getElementById("Input-marca");
let Input_modelo = document.getElementById("Input-modelo");
let Input_sn = document.getElementById("Input-sn");
let checkbox_hdmi = document.getElementById("checkbox-hdmi");
let checkbox_vga = document.getElementById("checkbox-vga");
let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !Input_cod_rec.value ||
    !Input_marca.value ||
    !Input_modelo.value ||
    !Input_sn.value
  ) {
    Swal.fire("", "Todos los campos son requeridos", "warning");
  } else {
    let hdmi = 0;
    let vga = 0;
    if (checkbox_hdmi.checked) {
      hdmi = 1;
    }
    if (checkbox_vga.checked) {
      vga = 1;
    }
    new_proyector = new Proyector(
      Input_cod_rec.value,
      Input_marca.value,
      Input_modelo.value,
      Input_sn.value,
      hdmi,
      vga,
      "DISPONIBLE"
    );

    let arrayProyectoresStock = JSON.parse(
      localStorage.getItem("proyectoresStock")
      );
    if (arrayProyectoresStock == null) {
      let arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
      arrayProyectores.push(new_proyector);
      arrayProyectoresStock = arrayProyectores.slice(0);
      localStorage.setItem("proyectores", JSON.stringify(arrayProyectores));
      localStorage.setItem(
        "proyectoresStock",
        JSON.stringify(arrayProyectoresStock)
      );
    } else {
      let arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
      arrayProyectores.push(new_proyector);
      arrayProyectoresStock.push(new_proyector);
      
      arrayProyectoresStock = [...new Set(arrayProyectoresStock)];
      localStorage.setItem("proyectores", JSON.stringify(arrayProyectores));
      localStorage.setItem(
        "proyectoresStock",
        JSON.stringify(arrayProyectoresStock)
      );
    }
    Swal.fire("", "Item agregado correctamente", "success");
  }
});