// Traigo del DOM elemento catalogo

let catalogo = document.getElementById("catalogo");

// Generar arrays por filtros

function filtradoPorMarca(arrayProyectores, criterio) {
  const array = arrayProyectores.filter((el) => el.marca.includes(criterio));
  return array;
}

// Funciones generar cards proyectores

function generateCards(array) {
  catalogo.innerHTML = "";
  for (const elemento of array) {
    let card = document.createElement("div");
    card.className = "col-sm-10 col-md-5 card m-2 py-2 cardCatalogo";
    card.style = "width: 18rem";
    card.id = `${elemento.cod_rec}`;

    if (elemento.hdmi) {
      salidaHDMI = "Disponible";
    } else {
      salidaHDMI = "No disponible";
    }
    if (elemento.vga) {
      salidaVGA = "Disponible";
    } else {
      salidaVGA = "No disponible";
    }

    if (elemento.hdmi) {
      card.innerHTML += `<h5 class="card-title text-center py-2" id="cardCodRec">
      ${elemento.cod_rec}
      </h5>
      <p class="card-text py-2" id="cardMarca">Marca: ${elemento.marca}</p>
      <p class="card-text py-2" id="cardModelo">Modelo: ${elemento.modelo}</p>
      <p class="card-text py-2" id="cardHDMI">HDMI: ${salidaHDMI}</p>
      <p class="card-text py-2" id="cardVGA">VGA: ${salidaVGA}</p>
      <p class="py-2">El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="adicionalHDMI-${elemento.cod_rec}" value="agregado">
            <label class="form-check-label" for="exampleCheck1">HDMI (opcional)</label>
          </div>
          <div class="mb-2 form-check">
            <input type="checkbox" class="form-check-input" id="adicionalZAPATILLA-${elemento.cod_rec}" value="agregado">
            <label class="form-check-label" for="exampleCheck1">Zapatilla adicional (opcional)</label>
          </div>
      <div class="text-center pt-2">
      </div>`;
    } else {
      card.innerHTML += `<h5 class="card-title text-center py-2" id="cardCodRec">
        ${elemento.cod_rec}
      </h5>
      <p class="card-text py-2" id="cardMarca">Marca: ${elemento.marca}</p>
      <p class="card-text py-2" id="cardModelo">Modelo: ${elemento.modelo}</p>
      <p class="card-text py-2" id="cardHDMI">HDMI: ${salidaHDMI}</p>
      <p class="card-text py-2" id="cardVGA">VGA: ${salidaVGA}</p>
      <p class="py-2">El maletín incluye alimentación, cabla VGA y zapatilla multitoma.</p>
          
          <div class="mb-5 form-check">
            <input type="checkbox" class="form-check-input" id="adicionalZAPATILLA-${elemento.cod_rec}" value="agregado">
            <label class="form-check-label" for="exampleCheck1">Zapatilla adicional (opcional)</label>
          </div>`;
    }
    if (elemento.estado == "DISPONIBLE") {
      card.innerHTML += `<div class="text-center pt-2">
      <div class="row d-flex">
      <div class="col boton_reserva">
        <button type="button" class="btn btn-success btnAdd" id="btnAdd-${elemento.cod_rec}">
          Agregar
        </button>
      </div>
    </div>
  </div>`;
    } else {
      card.innerHTML += `<div class="text-center pt-2">
      <div class="row d-flex">
      <div class="col boton_reserva">
        <button type="button" class="btn btn-success btnAdd d-none" id="btnAdd-${elemento.cod_rec}">
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
  let arrayStock = JSON.parse(localStorage.getItem("proyectoresStock"));
  if (arrayStock == null) {
    arrayStock = JSON.parse(localStorage.getItem("proyectores"));
  }
  if (filtroMarca == "Marca") {
    if (arrayStock == null) {
      catalogo.innerHTML =
        '<p class="text-center my-2">Elemento no encontrado</p>';
    } else {
      generateCards(arrayStock);
    }
  } else if (filtroMarca != "Marca") {
    let arrayFiltradoMarca = filtradoPorMarca(arrayStock, filtroMarca);
    if (arrayFiltradoMarca.length == 0) {
      catalogo.innerHTML =
        '<p class="text-center my-2">Elemento no encontrado</p>';
    } else {
      generateCards(arrayFiltradoMarca);
    }
  } else {
    catalogo.innerHTML =
      '<p class="text-center my-2">Elemento no encontrado</p>';
  }
}

//Eventos actulizacion

window.addEventListener("load", function () {
  generateOptionsMarca();
  generateCatalogo();
  generateBTNaddID();
});

selectProyectorMarca.onchange = () => {
  generateCatalogo();
  if (filtroMarca == "Marca") {
    generateBTNaddID();
  } else {
    let arrayAux = proyectoresStock.filter(
      (elemento) => elemento.marca == filtroMarca
    );
    generateOptionsCodRecFiltrado(arrayAux);
    generateBTNaddID();
  }
};
