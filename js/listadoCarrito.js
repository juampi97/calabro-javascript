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
  <span class="badge bg-primary rounded-pill d-none">14</span>
  </li>`;
      }
    }
  }
}
window.addEventListener("load", function () {
  generateListadoCarrito();
});
