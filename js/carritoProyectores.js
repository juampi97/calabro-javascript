let proyectoresStock = proyectores.slice(0);
let proyectoresReservados = [];

let elementosCarrito = 0;

localStorage.setItem("proyectoresStock",JSON.stringify(proyectoresStock));
localStorage.setItem("proyectoresReservados",JSON.stringify(proyectoresReservados));
sessionStorage.setItem("elementosCarrito",JSON.stringify(elementosCarrito));


// Evento boton agregar carrito

function generateBTNaddID() {
  let btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      let btnAddID = elementos[1];
      elementosCarrito++;
      actulizarBTNCarrito(elementosCarrito);
      actualizarProyectoresStock(btnAddID);
      generateCatalogo(proyectoresStock);
      generateBTNaddID();
    });
  });
}

function actulizarBTNCarrito(elementos) {
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
  proyectoresReservados.push(instrumento);
  position = proyectoresStock.indexOf(instrumento);
  proyectoresStock.splice(position, 1);
}

window.addEventListener("load", function () {
  actulizarBTNCarrito(elementosCarrito);
});
