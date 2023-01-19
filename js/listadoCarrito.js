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
          <button type="button" class="btn btn-danger py-1 btnEliminar" id="btnEliminar-${elemento.cod_rec}">x</button>
        </div>
        <span class="badge bg-primary rounded-pill d-none">14</span>
        </li>`;
      }
    }
  }
  generateAddHDMI();
  generateAddZAPATILLA();
}
function generateAddHDMI() {
  let addHDMI = localStorage.getItem("carritoHDMI");
  if (addHDMI != null) {
    let listadoCarrito = document.getElementById("listadoCarrito");
    listadoCarrito.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Adicional HDMI</div>
      Cantidad: 
      <span class="badge bg-primary rounded-pill ">${addHDMI}</span>
    </div>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-danger py-1 btnEliminar" id="btnEliminar-addHDMI">x</button>
    </div>
    </li>`;
  }
}

function generateAddZAPATILLA() {
  let addZAPATILLA = localStorage.getItem("carritoZAPATILLA");
  if (addZAPATILLA != null) {
    let listadoCarrito = document.getElementById("listadoCarrito");
    listadoCarrito.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Adicional zapatilla</div>
      Cantidad: 
      <span class="badge bg-primary rounded-pill ">${addZAPATILLA}</span>
    </div>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-danger py-1 btnEliminar" id="btnEliminar-addZAPATILLA">x</button>
    </div>
    </li>`;
  }
}

// Mostrar botones acciones del carrito

function mostrarBtnCarrito() {
  let arrayProyectores = JSON.parse(localStorage.getItem("proyectoresStock"));
  if (arrayProyectores == null) {
    arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
  }
  if (arrayProyectores.some((elemento) => elemento.estado == "CARRITO")) {
    btnVaciarCarrito.classList = "btn btn-danger mx-1";
    btnReservarCarrito.classList = "btn btn-success mx-1";
  } else {
    btnVaciarCarrito.classList = "btn btn-danger mx-1 d-none";
    btnReservarCarrito.classList = "btn btn-success mx-1 d-none";
  }
}

// Accion boton vaciar carrito

let btnVaciarCarrito = document.getElementById("btnVaciarCarrito");

btnVaciarCarrito.addEventListener("click", () => {
  let arrayProyectores = JSON.parse(localStorage.getItem("proyectoresStock"));
  if (arrayProyectores == null) {
    arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
  }
  arrayProyectores.forEach((elemento) => {
    elemento.estado = "DISPONIBLE";
  });

  localStorage.setItem("proyectoresStock", JSON.stringify(arrayProyectores));

  let elementosCarrito = 0;
  localStorage.setItem("elementosCarrito", elementosCarrito);

  localStorage.removeItem("carritoHDMI");
  localStorage.removeItem("carritoZAPATILLA");

  generateListadoCarrito();
  location.reload();
});

//Accion boton reservar carrito

let btnReservarCarrito = document.getElementById("btnReservarCarrito");

btnReservarCarrito.addEventListener("click", () => {

});

// Botones eliminar item del carrito

function generateBTNeliminarID() {
  let btnEliminar = document.querySelectorAll(".btnEliminar");

  btnEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      let btnEliminarID = elementos[1];
      actualizarProyectoresCarrito(btnEliminarID);
      actulizarBTNCarrito();
      generateBTNeliminarID();
      location.reload();
    });
  });

  // Eliminar adds

  let btnEliminarHDMI = document.getElementById("btnEliminar-addHDMI");
  if (btnEliminarHDMI != null) {
    btnEliminarHDMI.addEventListener("click", () => {
      localStorage.removeItem("carritoHDMI");
      actulizarBTNCarrito();
      location.reload();
    });
  }

  let btnEliminarZAPATILLA = document.getElementById(
    "btnEliminar-addZAPATILLA"
  );
  if (btnEliminarZAPATILLA != null) {
    btnEliminarZAPATILLA.addEventListener("click", () => {
      localStorage.removeItem("carritoZAPATILLA");
      actulizarBTNCarrito();
      location.reload();
    });
  }
  //
}

function actualizarProyectoresCarrito(itemID) {
  let arrayProyectores = JSON.parse(localStorage.getItem("proyectoresStock"));
  if (arrayProyectores == null) {
    arrayProyectores = JSON.parse(localStorage.getItem("proyectores"));
  }
  let instrumento = arrayProyectores.find((el) => el.cod_rec == itemID);
  position = arrayProyectores.indexOf(instrumento);
  arrayProyectores[position].estado = "DISPONIBLE";
  localStorage.setItem("proyectoresStock", JSON.stringify(arrayProyectores));

  elementosCarrito = cantidadElementosCarrito();
  localStorage.setItem("elementosCarrito", elementosCarrito);
}
mostrarBtnCarrito();

// Evento load

window.addEventListener("load", function () {
  mostrarBtnCarrito();
  generateListadoCarrito();
  generateBTNeliminarID();
});
