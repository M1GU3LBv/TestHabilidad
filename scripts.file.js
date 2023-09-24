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

  function operar(op, matrix) {
    
    var matrizA = [[document.getElementById('A-1-1').value, document.getElementById('A-1-2').value], [document.getElementById('A-2-1').value, document.getElementById('A-2-2').value]];
    var matrizB = [[document.getElementById('B-1-1').value, document.getElementById('B-1-2').value], [document.getElementById('B-2-1').value, document.getElementById('B-2-2').value]];
    console.log(matrizA);
    console.log(matrizB);
    
    switch (op) {
      case '1':
        alert("selecciona una operacion");
        break;
      case '2':
        
        console.log(resultado = sumarMatrices(matrizA, matrizB));
        break;
      case '3':

      default:
        break;
    }
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
