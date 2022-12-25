let proyectoresStock = proyectores.slice(0);
let proyectoresReservados = [];

// Evento boton agregar carrito

function generateBTNaddID() {
  let btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((boton) => {
    boton.addEventListener("click", () => {
      let elementos = boton.id.split("-");
      btnAddID = elementos[1]
      console.log(btnAddID);
    });
  });
}
