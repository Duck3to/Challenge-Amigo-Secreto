// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreSorteado;


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo === ""){
        alert("Por favor, escriba un nombre");
    }
    else{
        amigos.push(nombreAmigo)
        document.getElementById('amigo').value = "";
        // Actualizar la lista de amigos en la interfaz
        crearLista();
    }
    console.log(amigos);
}

function crearLista(){
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++){
        // Crear un nuevo elemento de lista para cada amigo
        let nombresLista = document.createElement('li');
        nombresLista.textContent = amigos[i];
       
        
        // Agregar el elemento a la lista
        lista.appendChild(nombresLista);
    }
}

function sortearAmigo(){

    if(amigos.length > 0){
        
        let numAmigoSecreto = Math.floor(Math.random() * amigos.length);
        nombreSorteado = amigos[numAmigoSecreto];
        let nombreElegido = document.getElementById('resultado');
        nombreElegido.innerHTML = `<li>${nombreSorteado}</li>`;
        
        console.log('Amigo sorteado:', nombreSorteado);
    }
    else{
        alert("Solo se puede realizar el sorteo con un nombre o más");
    }
}




