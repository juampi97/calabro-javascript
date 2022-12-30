/* let proyectoresStock = proyectores.slice(0);
let proyectoresReservados = [];
let carritoActual = [];*/

// Evento boton agregar carrito

function generateBTNaddID() {
  let btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      let btnAddID = elementos[1];

      actualizarProyectoresStock(btnAddID);

      actulizarBTNCarrito();

      generateCatalogo(proyectoresStock);
      generateBTNaddID();
    });
  });
}

function actulizarBTNCarrito() {
  let elementosCarrito = localStorage.getItem("elementosCarrito");
  if (elementosCarrito == null) {
    elementosCarrito = 0;
    localStorage.setItem("elementosCarrito", elementosCarrito);
  }
  let itemsCarrito = document.querySelector("#burbujaCarrito");
  if (elementosCarrito == 0) {
    itemsCarrito.innerHTML = "";
    itemsCarrito.class = "badge rounded-pill bg-warning d-none";
  } else {
    itemsCarrito.class = "badge rounded-pill bg-warning";
    itemsCarrito.innerHTML = `<p>${elementosCarrito}</p>`;
  }
}

function actualizarProyectoresStock(itemID) {
  let arrayProyectores = JSON.parse(localStorage.getItem("proyectoresStock"));
  if (arrayProyectores == null) {
    arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
  }
  let instrumento = arrayProyectores.find((el) => el.cod_rec == itemID);
  position = arrayProyectores.indexOf(instrumento);
  arrayProyectores[position].estado = "CARRITO";
  localStorage.setItem("proyectoresStock", JSON.stringify(arrayProyectores));
  
  elementosCarrito = cantidadElementosCarrito();
  localStorage.setItem("elementosCarrito", (elementosCarrito));

}

function cantidadElementosCarrito() {
  let elementosCarrito = 0;
  let arrayProyectores = JSON.parse(localStorage.getItem("proyectoresStock"));
  if (arrayProyectores == null) {
    arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
  }
  arrayProyectores.forEach((elemento) => {
    if (elemento.estado == "CARRITO") {
      elementosCarrito++;
    }
  });
  return elementosCarrito;
}

window.addEventListener("load", function () {
  actulizarBTNCarrito();
});