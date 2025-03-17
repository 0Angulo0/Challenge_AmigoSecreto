// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value; //Toma el valor dado por el usario
    if (amigoAgregado === '') { //Verifica que la casilla no esté en blanco
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigoAgregado); //Agrega el valor a la lista
        document.querySelector('#amigo').value = ''; //Limpia la casilla
        amigosEnLista(amigos); //Función para mostrar la lista de amigos
    }

    return;
}

function amigosEnLista(amigos) {
    let lista = document.getElementById("listaAmigos"); //Conexión con el codigo HTML
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos
    for (let i = 0; i < amigos.length; i++) { //por cada amigo agregado
        let amigo = amigos[i];
        let elementoLista = document.createElement("li"); //Crea el elemnto li
        elementoLista.textContent = amigo; //Agrega el nombre como contenido del texto
        lista.appendChild(elementoLista); //Agrega el elemento li como un hijo de <ul> 
    }

    return;
}

function sortearAmigo(){
    if (amigos.length > 0){ //Verifica que haya nombres en la lista
        let numeroGenerado = Math.floor(Math.random()*amigos.length); //Genera un indice pseudoaleatorio entero
        let amigoSeleccionado = amigos[numeroGenerado]; //Compara el indice con la lista 
        let resultado = document.getElementById("resultado"); //Conexión con el código HTML
        resultado.innerHTML = `El amigo secreto es ${amigoSeleccionado}`; //Texto a mostrar
    } else {
        alert("Por favor, inserte al menos un nombre.");
    } 
    return;
}
