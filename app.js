// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    // Corregir: usar trim() para eliminar espacios y validar correctamente
    if (nombreAmigo.trim() === ""){
        alert("Por favor, inserte un nombre");
    }
    else{
        amigos.push(nombreAmigo)
        document.getElementById('amigo').value = "";
    }
    console.log(amigos);
}


