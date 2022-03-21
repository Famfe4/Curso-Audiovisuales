var jugador = prompt("¿Cuál es tu nombre, guerrero?")

document.getElementById("guerrero").innerText = jugador;

var scena= 0;

var mazmorra = [
    "img/entrada.jpg",
    "img/carcel0.jpg",
    "img/celda0.jpg",
    "img/celda1.jpg",
    "img/celda2.jpg"
];

function entrar(){
    scena=1;
}

function celda1(){
    scena=2;
}
function celda2(){
    scena=3;
}
function celda3(){
    scena=4;
}

switch(scena){
    case 0:{
       document.getElementById("scene").innerHTML
       = "<img id='titulo' src='" + mazmorra[scena] + "'>";
       console.log(mazmorra[scena]);
       console.log(scena);
        break;
    }
    case 1:{
       document.getElementById("scene").innerHTML
       = "<img id='titulo' src='" + mazmorra[scena] + "'>";
       document.getElementById("titulo").innerText= "Carcel";
       document.getElementById("situacion").innerHTML= "<p>Estas en las entradas de unas celdas. ¿Qué quieres hacer?</p>";
       document.getElementById("botones").innerHTML= "<button onclick= 'celda1'>Celda 1</button><button onclick= 'celda2>Celda 2</button><button onclick= 'celda3>Celda 3</button>";
       console.log(mazmorra[scena]);
       console.log(scena);
       break;
   }
   case 2:{
       document.getElementById("scene").innerHTML
       = "<img id='titulo' src='" + mazmorra[scena] + "'>";
       document.getElementById("titulo").innerText= "Celda 1";
       document.getElementById("situacion").innerHTML= "<p>Estas en lacelda número uno. Tal y como ves en la imagen, hay distintos tipos de herramientas de tortura. ¡Escuchas un grito de mujer en la celda contigua!</p>";
       document.getElementById("botones").innerHTML= "<button onclick= 'entrar'>Entrada Carcel</button>";
       console.log(mazmorra[scena]);
       console.log(scena);
       break;
   }
   case 3:{
       document.getElementById("scene").innerHTML
       = "<img id='titulo' src='" + mazmorra[scena] + "'>";
       document.getElementById("titulo").innerText= "Celda 2";
       document.getElementById("situacion").innerHTML= "<p>Estas en lacelda número dos. Estas viendo como torturan a esa mujer. Si te quedas te van a descubrir. ¡Sal de ahí ahora mismo!</p>";
       document.getElementById("botones").innerHTML= "<button onclick= 'entrar'>Entrada Carcel</button>";
       console.log(mazmorra[scena]);
       console.log(scena);
       break;
   }
   case 4:{
       document.getElementById("scene").innerHTML
       = "<img id='titulo' src='" + mazmorra[scena] + "'>";
       document.getElementById("titulo").innerText= "Celda 3";
       document.getElementById("situacion").innerHTML= "<p>Se ve que alguien ya escapo de aquí. No seas tont@ y sal por el pasadizo.</p>";
       document.getElementById("botones").innerHTML= "<button onclick='location.reload()'>Salir</button>";
       console.log(mazmorra[scena]);
       console.log(scena);
       break;
   }
}

