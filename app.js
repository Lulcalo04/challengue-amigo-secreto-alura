let nombresAmigos = [];

function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let nombre = document.getElementById('amigo').value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregamos el nombre al array de amigos
    nombresAmigos.push(nombre);

    // Limpiamos el campo de entrada
    document.getElementById('amigo').value = '';

    // Actualizamos la lista de amigos en el HTML
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    // Limpiamos la lista antes de agregar los nuevos elementos
    lista.innerHTML = '';

    // Iteramos sobre el array y agregamos cada amigo como un <li>
    for (let amigo of nombresAmigos) {
        let item = document.createElement('li');
        item.innerHTML = amigo;
        lista.append(item);
    }
}

function sortearAmigo() {
    // Validamos si hay amigos disponibles para sortear
    if (nombresAmigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Generamos un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);

    // Obtenemos el amigo sorteado
    let amigoSorteado = nombresAmigos[indiceAleatorio];

    // Mostramos el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;


    let lista = document.getElementById('listaAmigos');

    // Limpiamos la lista antes de agregar los nuevos elementos
    lista.innerHTML = '';
}
