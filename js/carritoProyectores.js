let proyectoresStock = proyectores.slice(0);
let proyectoresReservados = [];

let elementosCarrito = 0;

// Evento boton agregar carrito

function generateBTNaddID() {
  let btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      let btnAddID = elementos[1];
      console.log(btnAddID);
      elementosCarrito++;
      console.log(elementosCarrito);
      actulizarBTNCarrito(elementosCarrito);
      actualizarProyectoresStock(btnAddID);
    });
  });
}

function actulizarBTNCarrito(elementos){
  let itemsCarrito = document.querySelector('#burbujaCarrito');
  if(elementos == 0){
    itemsCarrito.innerHTML = '';
    itemsCarrito.class = 'badge rounded-pill bg-warning d-none'
  }else{
    itemsCarrito.class = 'badge rounded-pill bg-warning'
    itemsCarrito.innerHTML = `<p>${elementos}</p>`;
  }
  }

function actualizarProyectoresStock(item){
  
}

  window.addEventListener("load", function () {
    actulizarBTNCarrito(elementosCarrito);
  });

