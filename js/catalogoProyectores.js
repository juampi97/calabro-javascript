// Traigo del DOM elemento catalogo

let catalogo = document.getElementById("catalogo");

// Generar opciones forms

let selectProyectorMarca = document.getElementById("selectProyectoresMarca");

function generateOptionsMarca() {
  selectProyectorMarca.innerHTML = "<option selected>Marca</option>";
  marcaProyectores.forEach((elemento) => {
    let optionMarca = document.createElement("option");
    optionMarca.innerHTML += elemento;
    optionMarca.value = elemento;
    selectProyectorMarca.append(optionMarca);
  });
}

let selectProyectorCodRec = document.getElementById("selectProyectoresCodRec");

function generateOptionsCodRec() {
  selectProyectorCodRec.innerHTML = "<option selected>Modelo</option>";
  codrecProyectores.forEach((elemento) => {
    let optionCodRec = document.createElement("option");
    optionCodRec.innerHTML += elemento;
    selectProyectorCodRec.append(optionCodRec);
  });
}

function generateOptionsCodRecFiltrado(array) {
  selectProyectorCodRec.innerHTML = "<option selected>Modelo</option>";
  array.forEach((elemento) => {
    let optionCodRec = document.createElement("option");
    optionCodRec.innerHTML += elemento.cod_rec;
    selectProyectorCodRec.append(optionCodRec);
  });
}

// Eventos para filtrado

let btnReset = document.getElementById("btnReset");

let filtroMarca = "Marca";
let filtroCodRec = "Modelo";

selectProyectorMarca.addEventListener("input", () => {
  filtroMarca = selectProyectorMarca.value;
  proyectoresFiltradosPorMarca = filtradoPorMarca(filtroMarca);
  proyectoresFiltradosPorMarcaCodRec = filtradoMarcaCodRec(
    filtroMarca,
    filtroCodRec
  );
});

selectProyectorCodRec.addEventListener("input", () => {
  filtroCodRec = selectProyectorCodRec.value;
  proyectoresFiltradosPorCodRec = filtradoPorCodRec(filtroCodRec);
  proyectoresFiltradosPorMarcaCodRec = filtradoMarcaCodRec(
    filtroMarca,
    filtroCodRec
  );
});

btnReset.addEventListener("click", () => {
  selectProyectorMarca.value = "Marca";
  selectProyectorCodRec.value = "Modelo";
  filtroMarca = "Marca";
  filtroCodRec = "Modelo";

  generateOptionsMarca();
  generateOptionsCodRec();

  generateCatalogo();

  generateBTNaddID()
});

// Generar arrays por filtros

function filtradoPorMarca(criterio) {
  const array = proyectoresStock.filter((el) => el.marca.includes(criterio));
  return array;
}

function filtradoPorCodRec(criterio) {
  const array = proyectoresStock.filter((el) => el.cod_rec.includes(criterio));
  return array;
}

function filtradoMarcaCodRec(marca, codrec) {
  const array = proyectoresStock.filter((el) => el.marca.includes(marca));
  const array2 = array.filter((el) => el.cod_rec.includes(codrec));
  return array2;
}

// Funciones generar cards proyectores

function generateCatalagoGenerico(array) {
  catalogo.innerHTML = "";
  for (const elemento of array) {
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

function generateCatalogo() {
  
  if (filtroMarca == "Marca" && filtroCodRec == "Modelo") {
    generateCatalagoGenerico(proyectoresStock);
  } else if (filtroMarca != "Marca" && filtroCodRec == "Modelo") {
    generateCatalagoGenerico(proyectoresFiltradosPorMarca);
  } else if (filtroMarca == "Marca" && filtroCodRec != "Modelo") {
    generateCatalagoGenerico(proyectoresFiltradosPorCodRec);
    
  } else if (filtroMarca !== "Marca" && filtroCodRec !== "Modelo") {
    if (proyectoresStock.some((elemento) => elemento.marca == filtroMarca)) {
      if (
        proyectoresFiltradosPorMarca.some(
          (elemento) => elemento.cod_rec == filtroCodRec
        )
      ) {
        generateCatalagoGenerico(proyectoresFiltradosPorCodRec);
      } else {
        catalogo.innerHTML =
          '<p class="text-center my-2">Elemento no encontrado</p>';
      }
    } else {
      catalogo.innerHTML =
        '<p class="text-center my-2">Elemento no encontrado</p>';
    }
  }
}

//Eventos actulizacion

window.addEventListener("load", function () {
  
  generateOptionsMarca();
  generateOptionsCodRec();
  
  generateCatalogo();

  generateBTNaddID()
});

selectProyectorMarca.onchange = () => {
  generateCatalogo();

  if (filtroMarca == "Marca") {
    generateOptionsCodRec();

    generateBTNaddID()


  } else {
    let arrayAux = proyectoresStock.filter(
      (elemento) => elemento.marca == filtroMarca
    );
    generateOptionsCodRecFiltrado(arrayAux);

    generateBTNaddID()
  }
};

selectProyectorCodRec.onchange = () => {
  generateCatalogo();

  generateBTNaddID()
};
