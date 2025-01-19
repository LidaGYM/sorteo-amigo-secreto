// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let elementoAmigo = document.getElementById('amigo');
    let nombreAmigo = elementoAmigo.value.trim(); //Limpiar espacios en blanco
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    elementoAmigo.value = ''; //Dejar el input vacío 
    
    mostrarAmigos();
    document.getElementById('resultado').innerHTML = '';
}

function mostrarAmigos() {
    let amigosLista = document.getElementById('listaAmigos');
    amigosLista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        amigosLista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado');
    let totalAmigos = amigos.length;
    let indiceAmigoSorteado = Math.floor(Math.random() * totalAmigos);

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    document.getElementById('listaAmigos').innerHTML = '';
    amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAmigoSorteado]}`;
    amigos=[];
}

