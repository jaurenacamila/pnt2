/* En base a condiciones poder decir si un partido de futbol reune todas las condiciones 
para empezar. En caso que alguna condicion no este aprobada (valor fale), mostrar por pantalla
entonces el porque de la misma. */


//array
const condiciones = [
    {condicion:"Debe haber pelota", valor:true},
    {condicion:"El equipo A tiene 11 jugadores", valor:true},
    {condicion:"El equipo B tiene 11 jugadores", valor:false},
    {condicion:"Todos los jugadores son mayores de 18", valor:true},
    {condicion:"Las condiciones climaticas son buenas", valor:false},
];


//button
const botonVerificar = document.getElementById("btn-verificar");


//event
botonVerificar.addEventListener("click", function() {
    verificar()
});


//function
function verificar() {
    let todasLasCondiciones = true;
    for (let i = 0; i < condiciones.length; i++) {
      if (!condiciones[i].valor) {
        alert(`Condición no cumplida: ${condiciones[i].condicion}. `)
        todasLasCondiciones = false;
      }
    }
    if (todasLasCondiciones) {
        alert("Toda las consiciones se cumplen. El partido puede comenzar!")
    }
}




/* 3) en base a una lista de peliculas donde cada pelicula tiene. Nombre, Año de Estreno, Id
Ordenar todos los objetos de la misma por nombre y mostrarlo por pantalla.
3.b) Hacer que se pueda ordenar con un boton HTML ascendente y descendente.
3.e) Con un boton de html poder generar por pantalla el resultado de todas las peliculas
de forma "Pelicula(año de estreno)" */


//array
const peliculas = [
    { nombre: "The Shawshank Redemption", anioEstreno: 1994, id: 1 },
    { nombre: "The Godfather", anioEstreno: 1972, id: 2 },
    { nombre: "The Dark Knight", anioEstreno: 2008, id: 3 },
    { nombre: "The Lord of the Rings: The Fellowship of the Ring", anioEstreno: 2001, id: 4 },
    { nombre: "Pulp Fiction", anioEstreno: 1994, id: 5 }
];


//buttons
const botonOrdenarAsc = document.getElementById("btn-mostrarPelisAsc");
const botonOrdenarDes = document.getElementById("btn-mostrarPelisDes");

//events
window.onload = function() {
    mostrarLista();
};

botonOrdenarAsc.addEventListener("click", function() {
    mostrarEnOrdenAsc()
});

botonOrdenarDes.addEventListener("click", function() {
    mostrarEnOrdenDes()
});


//functions
function mostrarLista() {
    lista.innerHTML = "";
    const ul = document.createElement("ul");
    peliculas.forEach(pelicula => {
      const li = document.createElement("li");
      li.textContent = `${pelicula.nombre} (${pelicula.anioEstreno}) - ID: ${pelicula.id}`;
      ul.appendChild(li);
    });
    lista.appendChild(ul);
}

function mostrarEnOrdenAsc() {
    peliculas.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    mostrarLista();
}

function mostrarEnOrdenDes() {
    peliculas.sort((a, b) => b.nombre.localeCompare(a.nombre));
    mostrarLista();
}



/* 3.c) Poder eliminar algun elemento de la lista en base a un Id */


//button & container
const botonEliminar = document.getElementById("btn-eliminar");
const containerEli = document.getElementById("eliminar-container");


//event
botonEliminar.addEventListener("click", function(){
    eliminarPeli()
});


//functions
function eliminarPeli() {
    const peliInput = document.getElementById("peli-id-input");
    const peliId = Number(peliInput.value);
    const index = peliculas.findIndex(pelicula => pelicula.id === peliId); 
    if (index >= 0) {
        peliculas.splice(index, 1);
        mostrarEliminadas();
    } else {
        alert("NO EXISTE ESE ID!")
    }
    peliInput.value = "";
    if (peliculas.length === 0) {
        containerEli.innerHTML= "";
        const parrafo = document.createElement("p");
        parrafo.textContent = "ELIMINASTE LA ULTIMA PELICULA QUE HABIA!!"
        containerEli.appendChild(parrafo);
    } 
}

function mostrarEliminadas() {
    containerEli.innerHTML="PELICULAS DISPONIBLES:"
    const ul = document.createElement("ul");
    peliculas.forEach(pelicula => {
      const li = document.createElement("li");
      li.textContent = `${pelicula.nombre} (id: ${pelicula.id})`;
      ul.appendChild(li);
    });
    containerEli.appendChild(ul);
}



/* 4) Hacer un metodo que reciba un array de string y devuelva otro pero todo pasado a mayuscula */

//form & container
const form = document.querySelector('form');
const containerMay = document.getElementById("mayuscula-container")


//event
form.addEventListener('submit', function(event) {
    event.preventDefault();
    containerMay.innerHTML="";
    const input = document.querySelector('#strings');
    const texto = input.value.split(',').map(str => str.trim());
    const textoInUpperCase = convertToUpperCase(texto);
    mostrarMayusculas(textoInUpperCase);
});


//functions
function mostrarMayusculas(textoInUpperCase){
    const textMay = document.createElement("h3");
    textMay.textContent =  textoInUpperCase
    containerMay.appendChild(textMay)
    inputMay = document.getElementById("strings")
    inputMay.value = "";
}

function convertToUpperCase(array) {
    return array.map(str => str.toUpperCase());
}
