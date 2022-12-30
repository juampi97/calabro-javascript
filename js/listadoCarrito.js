// Generacion listado carrito

function generateListadoCarrito() {
  let Carrito = JSON.parse(localStorage.getItem("elementosCarrito"));
  let proyectoresStock = JSON.parse(localStorage.getItem("proyectoresStock"));
  let listadoCarrito = document.getElementById("listadoCarrito");
  if (Carrito == null) {
    listadoCarrito.innerHTML = "";
  } else {
    for (const elemento of proyectoresStock) {
      if (elemento.estado == "CARRITO") {
        listadoCarrito.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${elemento.cod_rec}</div>
          Otra data
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-danger" id="btnEliminar-${elemento.cod_rec}">X</button>
        </div>
        <span class="badge bg-primary rounded-pill d-none">14</span>
        </li>`;
      }
    }
  }
}

// Boton vaciar carrito

let btnVaciarCarrito = document.getElementById('btnVaciarCarrito')
btnVaciarCarrito.addEventListener('click',() =>{
  let arrayProyectores = JSON.parse(localStorage.getItem("proyectoresStock"));
  if (arrayProyectores == null) {
    arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
  }
  console.log(arrayProyectores);
  arrayProyectores.forEach((elemento) => {
    elemento.estado = "DISPONIBLE";
  })
  
  localStorage.setItem("proyectoresStock", JSON.stringify(arrayProyectores));
  
  let elementosCarrito = 0;
  localStorage.setItem("elementosCarrito", (elementosCarrito));

  generateListadoCarrito();
  location.reload();
})

window.addEventListener("load", function () {
  generateListadoCarrito();
});
