document.addEventListener("DOMContentLoaded", function () {
  removerow(".thirdlyA");
  removerow(".thirdlyB");
});
function removerow(row) {
  var elementos = document.querySelectorAll(row);
  elementos.forEach(function (elemento) {
    elemento.style.display = "none";
  });
}
function addrow(row) {
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
function calculate(){

if (document.getElementById('B-3-1') == null) {
  alert('sex');
} else {
  alert('down');
}

}
