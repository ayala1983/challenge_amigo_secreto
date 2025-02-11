let amigos = [];

//agregamos un nuevo amigo a la lista.
//validamos que no se encuentre vacio el campo y actualizamos.

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim() === "") {
        alert("por favor, ingrese un nombre");
    } else {
        amigos.push(nombreAmigo);
        document.querySelector("#amigo").value = "";
        mostrarListaAmigo();
    }
}

//Actualizamos la visualizacion de la lista amigos, y creamos elementos del tipo <li> para cada amigo.
function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];

        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

//sorteo y muestra de amigo seleccionado aleatoriamente

function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        alert("por favore, ingrese un nombre antes de sortear");
    } else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML =document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
}
