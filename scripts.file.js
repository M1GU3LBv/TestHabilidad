document.addEventListener("DOMContentLoaded", function () {
  removerow(".thirdlyA");
  removerow(".thirdlyB");
});
var tempA;
var tempB;

function removerow(row) {
  var elementos = document.querySelectorAll(row);
  elementos.forEach(function (elemento) {
    elemento.style.display = "none";
    if (row == ".thirdlyA") {
      tempA = "2x2";
    } else if (row == ".thirdlyB") {
      tempB = "2x2";
    }
  });
}
function addrow(row) {
  if (row == ".thirdlyA") {
    tempA = "3x3";
  } else if (row == ".thirdlyB") {
    tempB = "3x3";
  }
  var elementos = document.querySelectorAll(row);
  elementos.forEach(function (elemento) {
    elemento.style.display = "";
  });
}
function myFunction(divId) {
  var div = document.getElementById(divId);
  var inputs = div.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function comprobar() {
  var inputs = div.getElementsByTagName("input");
  if (tempA == true) {
    var button = document.getElementById("calculate");
    button.disabled = true;
  }
}

function calculate() {
  var operacion = document.getElementById("operacion").value;
  var div = matrixA;

  if (tempA == tempB) {
    operar(operacion, tempA);
  } else {
    alert("Selecciona dos matricez iguales");
  }
}
function operar(op, matrix) {
  var matrizA, matrizB;

  if (matrix === "2x2") {
      matrizA = obtenerMatriz(2, 2, "A");
      matrizB = obtenerMatriz(2, 2, "B");
  } else {
      matrizA = obtenerMatriz(3, 3, "A");
      matrizB = obtenerMatriz(3, 3, "B");
  }
  if (!noHayCamposVacios(matrizA) || !noHayCamposVacios(matrizB)) {
    alert("Debe completar todas las celdas de las matrices.");
    return;
}
  switch (op) {
      case "1":
          alert("Selecciona una operación");
          break;
      case "2":
          alert((resultado = sumarMatrices(matrizA, matrizB)));
          break;
      case "3":
          alert((resultado = multiplicarMatrices(matrizA, matrizB)));
          break;
      case "4":
          alert((resultado = restarMatrices(matrizA, matrizB)));
          break;
      default:
          break;
  }
}
function sumarMatrices(matrizA, matrizB) {
  if (
    matrizA.length !== matrizB.length ||
    matrizA[0].length !== matrizB[0].length
  ) {
    throw new Error("Las matrices no tienen las mismas dimensiones.");
  }

  var resultado = [];
  for (var i = 0; i < matrizA.length; i++) {
    var fila = [];
    for (var j = 0; j < matrizA[i].length; j++) {
      fila.push(matrizA[i][j] + matrizB[i][j]);
    }
    resultado.push(fila);
  }

  return resultado;
}
function multiplicarMatrices(matrizA, matrizB) {
  if (matrizA[0].length !== matrizB.length) {
    throw new Error("Las matrices no tienen dimensiones compatibles para la multiplicación.");
  }

  var resultado = [];
  for (var i = 0; i < matrizA.length; i++) {
    resultado[i] = [];
    for (var j = 0; j < matrizB[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < matrizA[0].length; k++) {
        sum += matrizA[i][k] * matrizB[k][j];
      }
      resultado[i][j] = sum;
    }
  }

  return resultado;
}
function restarMatrices(matrizA, matrizB) {
  if (
    matrizA.length !== matrizB.length ||
    matrizA[0].length !== matrizB[0].length
  ) {
    throw new Error("Las matrices no tienen las mismas dimensiones.");
  }

  var resultado = [];
  for (var i = 0; i < matrizA.length; i++) {
    resultado[i] = [];
    for (var j = 0; j < matrizA[0].length; j++) {
      resultado[i][j] = matrizA[i][j] - matrizB[i][j];
    }
  }

  return resultado;
}


function obtenerMatriz(numFilas, numColumnas, identificador) {
  var matriz = [];
  for (var i = 0; i < numFilas; i++) {
      matriz[i] = [];
      for (var j = 0; j < numColumnas; j++) {
          matriz[i][j] = parseInt(document.getElementById(identificador + "-" + (i + 1) + "-" + (j + 1)).value);
      }
  }
  return matriz;
}
//////////////////////////////////non necessary////////////////////////////////
function darkmode() {
  var floting = document.getElementById("my-float");
  var element = document.body;
  if (floting.classList.contains("fa-sun")) {
    floting.setAttribute("class", "fa-solid fa-moon my-float");
    element.classList.toggle("dark-mode");
  } else {
    floting.setAttribute("class", "fa-solid fa-sun my-float");
    element.classList.toggle("dark-mode");
  }
}
function noHayCamposVacios(matriz) {
  for (var i = 0; i < matriz.length; i++) {
      for (var j = 0; j < matriz[i].length; j++) {
          if (isNaN(matriz[i][j])) {
              return false; // Si al menos una celda no es un número, hay un campo vacío
          }
      }
  }
  return true; // No hay campos vacíos
}