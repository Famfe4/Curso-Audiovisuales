//document.body.innerHTML = "Hola mundo";
//var nombre = "Fran";

/*function saludo(nombre){
  var text = "Buenos dias " + nombre;
  document.write(text + "<br>");
  //document.write("<br>");
}*/

/*saludo("Altaïr");saludo("María");saludo("Fran");*/

//var usuario = "Clark";

//saludo(usuario);


/*-- Cambio de color --*/


function changeColor() {
  var color = document.getElementById("color").value;
  document.body.style.background = color;
}

function changeColor1() {
  var red = document.getElementById("color1").value;
  var green = document.getElementById("color2").value;
  var blue = document.getElementById("color3").value;

  document.body.style.background =
    "rgb" + "(" + red + "," + green + "," + blue + ")";
}

function changeColor2() {
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  var alfa = document.getElementById("alf").value;

  document.body.style.background =
    "rgba" + "(" + red + "," + green + "," + blue + "," + alfa + ")";
}

function changeColor3() {
  var favcolor = document.getElementById("favcolor").value;
  
  document.body.style.background = favcolor;
}



/*function changeColor(){
 var text = document.getElementById("alf").value;
  document.write(text);
  }*/
