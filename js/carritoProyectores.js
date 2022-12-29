let proyectoresStock = proyectores.slice(0);
let proyectoresReservados = [];
let carritoActual = [];

let elementosCarrito = 0;

// Evento boton agregar carrito

function generateBTNaddID() {
  let btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      let btnAddID = elementos[1];
      elementosCarrito++;
      actualizarProyectoresStock(btnAddID);
      actulizarBTNCarrito();
      generateCatalogo(proyectoresStock);
      generateBTNaddID();
    });
  });
}

function actulizarBTNCarrito() {
  let carritoActual = JSON.parse(sessionStorage.getItem("carritoActual"));
  let elementos = carritoActual.length;

  let itemsCarrito = document.querySelector("#burbujaCarrito");
  if (elementos == 0) {
    itemsCarrito.innerHTML = "";
    itemsCarrito.class = "badge rounded-pill bg-warning d-none";
  } else {
    itemsCarrito.class = "badge rounded-pill bg-warning";
    itemsCarrito.innerHTML = `<p>${elementos}</p>`;
  }
}

function actualizarProyectoresStock(itemID) {
  let instrumento = proyectoresStock.find((el) => el.cod_rec == itemID);
  // proyectoresReservados.push(instrumento);
  carritoActual.push(instrumento);
  sessionStorage.setItem("carritoActual", JSON.stringify(carritoActual));

  position = proyectoresStock.indexOf(instrumento);
  proyectoresStock.splice(position, 1);
}

window.addEventListener("load", function () {
  actulizarBTNCarrito(elementosCarrito);
});
