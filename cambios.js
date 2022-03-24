let textoBoton = document.getElementById("btnCambiar").innerText;
const clase = document.getElementById("galeria").innerText;


function cambiarvista() {
    if (galeria.className == "grid") {
        galeria.className = "list";
        textoBoton = document.getElementById("btnCambiar").innerText = "Mostrar en modo rejilla";
    } else {
        galeria.className = "grid";
        textoBoton = document.getElementById("btnCambiar").innerText = "Mostrar en modo lista";
    }
}