let proyectoresStock = proyectores.slice(0);
let proyectoresReservados = [];
let carritoActual = [{"VIEW3", "VIEWSONIC", "MOD3", "SN101", 1, 0}];

let elementosCarrito = 0;

localStorage.setItem("proyectoresStock",JSON.stringify(proyectoresStock));
localStorage.setItem("proyectoresReservados",JSON.stringify(proyectoresReservados));
sessionStorage.setItem("carritoActual",JSON.stringify(elementosCarrito));

// Evento boton agregar carrito

function generateBTNaddID() {
  let btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      let btnAddID = elementos[1];
      elementosCarrito++;
      actualizarProyectoresStock(btnAddID);
      actulizarBurbujaCarrito();
      generateCatalogo(proyectoresStock);
      generateBTNaddID();
    });
  });
}
function actualizarProyectoresStock(itemID) {
  let instrumento = proyectoresStock.find((el) => el.cod_rec == itemID);
  carritoActual.push(instrumento);
  sessionStorage.setItem("carritoActual",JSON.stringify(carritoActual));
  position = proyectoresStock.indexOf(instrumento);
  proyectoresStock.splice(position, 1);
}

function actulizarBurbujaCarrito() {
  let carrito = recuperarCarrito();
  let itemsCarrito = document.querySelector("#burbujaCarrito");
  if (elementosCarrito == 0) {
    itemsCarrito.innerHTML = "";
    itemsCarrito.class = "badge rounded-pill bg-warning d-none";
  } else {
    itemsCarrito.class = "badge rounded-pill bg-warning";
    itemsCarrito.innerHTML = `<p>${carrito.length}</p>`;
  }
}

function recuperarCarrito() {
  let carritoActual = JSON.parse(sessionStorage.getItem("carritoActual"));
  return carritoActual;
}

window.addEventListener("load", function () {
  actulizarBurbujaCarrito();
});
