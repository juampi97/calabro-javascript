let tipoOperacion;

let proyectores = 5;
let notebooks = 5;

let proyectoresReservados = 0;
let notebooksReservadas = 0;

//Funciones

function dataIn() {
  tipoOperacion = operationIn();
  let operacionValida = validarOperacion(tipoOperacion);
  if (operacionValida) {
    selectOperacion(tipoOperacion);
  } else {
    alert("Error, operacion no valida");
  }
}

function operationIn() {
  tipoOperacion = prompt(
    "¡Bienvenido! Ingrese:" +
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
      "'N' para consultar stock de notebooks" +
      "\n" +
      "'ESC' para terminar la operacion"
  );
  let consultaValida = validarNPE(tipoDispositivo);
  if (consultaValida) {
    switch (tipoDispositivo) {
      case "N":
        alert("Hay " + notebooks + " unidades en stock");
        break;
      case "P":
        alert("Hay " + proyectores + " unidades en stock");
        break;
    }
  } else {
    alert("Error, consulta no valida");
    consulta();
  }
}

function reserva() {
  tipoDispositivo = prompt(
    "Ingrese:" +
      "\n" +
      "'P' para la reserva de un proyector" +
      "\n" +
      "'N' para la reserva de una notebook" +
      "\n" +
      "'ESC' para terminar la operacion"
  );
  let reservaValida = validarNPE(tipoDispositivo);
  if (reservaValida) {
    switch (tipoDispositivo) {
      case "N":
        if (notebooks > 0) {
          notebooks--;
          notebooksReservadas++;
          alert("Reserva de una notebook efectuada");
        } else {
          alert("No hay notebooks en stock");
        }
        break;
      case "P":
        if (proyectores > 0) {
          proyectores--;
          proyectoresReservados++;
          alert("Reserva de un proyector efectuada");
        } else {
          alert("No hay proyectores en stock");
        }
        break;
    }
  } else {
    alert("Error, consulta no valida");
    consulta();
  }
}

function devolucion() {
  if (proyectoresReservados > 0 && notebooksReservadas > 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'P' para devolver un proyector" +
        "\n" +
        "'N' para devolver una notebook" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    let devolucionValida = validarNPE(tipoDispositivo);
    if (devolucionValida) {
      switch (tipoDispositivo) {
        case "N":
          notebooks++;
          notebooksReservadas--;
          alert("Devolucion de notebook efectuada");
          break;
        case "P":
          proyectores++;
          proyectoresReservados--;
          alert("Devolucion de proyector efectuada");
          break;
      }
    } else {
      alert("Error, devolucion no valida");
      devolucion();
    }
  } else if (proyectoresReservados > 0 && notebooksReservadas == 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'P' para devolver un proyector" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    let devolucionValida = validarPE(tipoDispositivo);
    if (devolucionValida) {
      if (tipoDispositivo == "P") {
        proyectores++;
        proyectoresReservados--;
        alert("Devolucion de proyector efectuada");
      }
    } else {
      alert("Error, devolucion no valida");
      devolucion();
    }
  } else if (proyectoresReservados == 0 && notebooksReservadas > 0) {
    tipoDispositivo = prompt(
      "Ingrese:" +
        "\n" +
        "'N' para devolver una notebook" +
        "\n" +
        "'ESC' para terminar la operacion"
    );
    let devolucionValida = validarNE(tipoDispositivo);
    if (devolucionValida) {
      if (tipoDispositivo == "N") {
        notebooks++;
        notebooksReservadas--;
        alert("Devolucion de notebook efectuada");
      }
    } else {
      alert("Error, devolucion no valida");
      devolucion();
    }
  } else {
    alert(
      "No se efectuo ninguna reserva previa, no hay unidades para devolver"
    );
  }
}

function validarNPE(dato) {
  switch (dato) {
    case "N":
    case "P":
    case "ESC":
      return 1;
      break;
    default:
      return 0;
      break;
  }
}

function validarNE(dato) {
  switch (dato) {
    case "N":
    case "P":
    case "ESC":
      return 1;
      break;
    default:
      return 0;
      break;
  }
}

function validarPE(dato) {
  switch (dato) {
    case "N":
    case "P":
    case "ESC":
      return 1;
      break;
    default:
      return 0;
      break;
  }
}

//Codigo principal

dataIn();
while (tipoOperacion != "ESC") {
  dataIn();
}
alert("¡Adios!");
