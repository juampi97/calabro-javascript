let tipoOperacion;

let proyectores = 10;
let notebooks = 10;

//Funciones

function operationIn() {
  tipoOperacion = prompt(
    "Ingrese:" +
      "\n" +
      "'0' para consultar stock de un producto" +
      "\n" +
      "'1' para reservar un producto" +
      "\n" +
      "'2' para devolver un producto (valido unicamente si se realizo un reserva previamente)" +
      "\n" +
      "'ESC' para terminar la operacion"
  );

  return tipoOperacion;
}

function validarOperacion(dato) {
  switch (dato) {
    case "0":
    case "1":
    case "2":
    case "ESC":
      return 1;
      break;
    default:
      return 0;
      break;
  }
}

function selectOperacion(dato) {
  switch (dato) {
    case "0":
      consulta();
      break;
    case "1":
      reserva();
      break;
    case "2":
      devolucion();
      break;
    case "ESC":
      break;
  }
}

function consulta() {
  tipoDispositivo = prompt(
    "Ingrese:" +
      "\n" +
      "'P' para consultar stock de proyectores" +
      "\n" +
      "'N' para consultar stock de notebooks"
  );
  let consultaValida = validarConsulta(tipoDispositivo);
  if(consultaValida){
    switch(tipoDispositivo){
        case 'N':
            alert("Hay " + notebooks + " unidades en stock");
        break;
        case 'P':
            alert("Hay " + proyectores + " unidades en stock");
        break;
    }
  }else{
    alert("Error, consulta no valida");
    consulta();
  }
}

function validarConsulta(dato) {
  switch (dato) {
    case "N":
    case "P":
      return 1;
      break;
    default:
      return 0;
      break;
  }
}

function reserva() {}

function devolucion() {}

//Codigo principal

tipoOperacion = operationIn();
let operacionValida = validarOperacion(tipoOperacion);
if(operacionValida){
    selectOperacion(tipoOperacion);
}
else{
    alert("Error, operacion no valida");
}
