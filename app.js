// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array para guardar los nombres 
let Amigos = []
//funcion para agregar los nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let Nombres = input.value.trim(); //con esto guardamos lo que estaba en el placeholder en la variable

    if(Nombres === "") {
        alert("Por favor ingrese un nombre");
        return;
    }
    //agregamos los nombres al array creado previamente
    Amigos.push(Nombres);
    mostrarLista();

    input.value = ""; //limpiamos el placeholder como pide la consigna
}   

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    Amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}