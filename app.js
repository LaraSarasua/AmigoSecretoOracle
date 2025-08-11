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
    let lista = document.getElementById("listaAmigos"); //donde aparecen los nombres
    lista.innerHTML = ""; //limpia la lista
    Amigos.forEach(amigo => {
        let li = document.createElement("li"); //crea el LI
        li.textContent = amigo; //asigna el nombre
        lista.appendChild(li); //agrega a la lista
    });
}

//creamos funcion para sortear los amigos
function sortearAmigo() {
    if(Amigos.length === 0) {
        alert("Se necesita que agregue amigos para poder sortear");
        return;
    }
    let Random = Math.floor(Math.random() * Amigos.length);

    let amigoSorteado = Amigos[Random];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = <li>'El amigo elegido es: ${amigoSorteado}</li> //No me dejaba usar + asi que utilice el $ 
}