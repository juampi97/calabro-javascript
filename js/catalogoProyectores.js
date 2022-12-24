// Traigo del DOM elemento catalogo

let catalogo = document.getElementById("catalogo");

generateCatalagoGenerico();

// Funciones generar cards proyectores

function generateCatalagoGenerico() {
  catalogo.innerHTML = "";
  for (const elemento of proyectores) {
    let card = document.createElement("div");
    card.className = "col-sm-10 col-md-5 card m-2 py-2 cardCatalogo";
    card.style = "width: 18rem";
    card.id = `${elemento.cod_rec}`;

    if (elemento.hdmi) {
      card.innerHTML += `<h5 class="card-title text-center py-2" id="cardCodRec">
    ${elemento.cod_rec}
  </h5>
  <p class="card-text py-2" id="cardMarca">Marca: ${elemento.marca}</p>
  <p class="card-text py-2" id="cardModelo">Modelo: ${elemento.modelo}</p>
  <p class="card-text py-2" id="cardHDMI">HDMI: ${elemento.salidaHDMI()}</p>
  <p class="card-text py-2" id="cardVGA">VGA: ${elemento.salidaVGA()}</p>
  <p class="py-2">El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
       <div class="mb-3 form-check">
         <input type="checkbox" class="form-check-input" id="adicional_hdmi" value="agregado">
         <label class="form-check-label" for="exampleCheck1">HDMI (opcional)</label>
       </div>
       <div class="mb-2 form-check">
         <input type="checkbox" class="form-check-input" id="adicional_zapatilla" value="agregado">
         <label class="form-check-label" for="exampleCheck1">Zapatilla adicional (opcional)</label>
       </div>
  <div class="text-center pt-2">
    <div class="row d-flex">
      <div class="col boton_reserva">
        <button type="button" class="btn btn-success btnAdd" id="btnAdd-${
          elemento.cod_rec
        }">
          Agregar
        </button>
      </div>
    </div>
  </div>`;
    } else {
      card.innerHTML += `<h5 class="card-title text-center py-2" id="cardCodRec">
    ${elemento.cod_rec}
  </h5>
  <p class="card-text py-2" id="cardMarca">Marca: ${elemento.marca}</p>
  <p class="card-text py-2" id="cardModelo">Modelo: ${elemento.modelo}</p>
  <p class="card-text py-2" id="cardHDMI">HDMI: ${elemento.salidaHDMI()}</p>
  <p class="card-text py-2" id="cardVGA">VGA: ${elemento.salidaVGA()}</p>
  <p class="py-2">El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
       
       <div class="mb-5 form-check">
         <input type="checkbox" class="form-check-input" id="adicional_zapatilla" value="agregado">
         <label class="form-check-label" for="exampleCheck1">Zapatilla adicional (opcional)</label>
       </div>
  <div class="text-center pt-2">
    <div class="row d-flex">
      <div class="col boton_reserva">
        <button type="button" class="btn btn-success btnAdd" id="btnAdd-${
          elemento.cod_rec
        }">
          Agregar
        </button>
      </div>
    </div>
  </div>`;
    }

    catalogo.append(card);
  }
}

// Generar opciones forms

let selectProyectorMarca = document.getElementById("selectProyectoresMarca");
marcaProyectores.forEach((elemento) => {
  let optionMarca = document.createElement("option");
  optionMarca.innerHTML += elemento;
  optionMarca.value = elemento;
  selectProyectorMarca.append(optionMarca);
});

let selectProyectorCodRec = document.getElementById("selectProyectoresCodRec");
codrecProyectores.forEach((elemento) => {
  let optionCodRec = document.createElement("option");
  optionCodRec.innerHTML += elemento;
  selectProyectorCodRec.append(optionCodRec);
});

// Eventos para filtrado

let btnReset = document.getElementById("btnReset");

let filtroMarca = "Marca";
let filtroCodRec = "Modelo";

selectProyectorMarca.addEventListener("input", () => {
  filtroMarca = selectProyectorMarca.value;
});

selectProyectorCodRec.addEventListener("input", () => {
  filtroCodRec = selectProyectorCodRec.value;
});

btnReset.addEventListener("click", () => {
  selectProyectorMarca.value = "Marca";
  selectProyectorCodRec.value = "Modelo";
  filtroMarca = "Marca";
  filtroCodRec = "Modelo";
});

// Evento boton agregar carrito
let btnAdd = document.querySelectorAll(".btnAdd");
btnAdd.forEach((boton) => {
  boton.addEventListener("click", () => {
    let elemento = boton.id.split("-");
    console.log(elemento[1]);
  });
});
