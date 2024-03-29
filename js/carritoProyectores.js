// Evento boton agregar carrito

function generateBTNaddID() {
  let btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      let btnAddID = elementos[1];

      boton.className = "btn btn-succes btnAdd d-none"

      addHDMIrequired(btnAddID);
      addZAPATILLArequired(btnAddID);

      actualizarProyectoresStock(btnAddID);

      actulizarBTNCarrito();
      generateCatalogo(proyectores);
      
      generateBTNaddID();
    });
  });
}

function addHDMIrequired(btnID) {
  let checkboxHDMI = document.getElementById(`adicionalHDMI-${btnID}`);
  if (checkboxHDMI != null) {
    if (checkboxHDMI.checked) {
      let carritoHDMI = JSON.parse(localStorage.getItem("carritoHDMI"));
      if (carritoHDMI == null) {
        carritoHDMI = 0;
      }
      carritoHDMI++;
      localStorage.setItem("carritoHDMI", carritoHDMI);
    }
  }
}

function addZAPATILLArequired(btnID) {
  let checkboxZAPATILLA = document.getElementById(
    `adicionalZAPATILLA-${btnID}`
  );
  if (checkboxZAPATILLA != null) {
    if (checkboxZAPATILLA.checked) {
      let carritoZAPATILLA = JSON.parse(
        localStorage.getItem("carritoZAPATILLA")
      );
      if (carritoZAPATILLA == null) {
        carritoZAPATILLA = 0;
      }
      carritoZAPATILLA++;
      localStorage.setItem("carritoZAPATILLA", carritoZAPATILLA);
    }
  }
}

function actulizarBTNCarrito() {
  let elementosCarrito = localStorage.getItem("elementosCarrito");
  if (elementosCarrito == null) {
    elementosCarrito = 0;
  }else{
    elementosCarrito = parseInt(elementosCarrito);
  }
  let carritoHDMI = (localStorage.getItem("carritoHDMI"));
  if (carritoHDMI == null) {
    carritoHDMI = 0;
  }else{
    carritoHDMI = parseInt(carritoHDMI);
  }
  let carritoZAPATILLA = localStorage.getItem("carritoZAPATILLA");
  if (carritoZAPATILLA == null) {
    carritoZAPATILLA = 0;
  }else{
    carritoZAPATILLA = parseInt(carritoZAPATILLA);
  }
  let totalCarrito = elementosCarrito + carritoHDMI + carritoZAPATILLA;
  let itemsCarrito = document.querySelector("#burbujaCarrito");
  if (totalCarrito == 0) {
    itemsCarrito.innerHTML = "";
    itemsCarrito.class = "badge rounded-pill bg-warning d-none";
  } else {
    itemsCarrito.class = "badge rounded-pill bg-warning";
    itemsCarrito.innerHTML = `<p>${totalCarrito}</p>`;
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
  localStorage.setItem("elementosCarrito", elementosCarrito);
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
