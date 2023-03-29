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
//boton
const botonVerificar = document.getElementById("btn-verificar");
//evento
botonVerificar.addEventListener("click", function() {
    verificar(condiciones)
});
//funcion
function verificar(condicionesDelPartido) {
    let todasLasCondiciones = true;
    for (let i = 0; i < condicionesDelPartido.length; i++) {
      if (!condicionesDelPartido[i].valor) {
        alert(`Condición no cumplida: ${condicionesDelPartido[i].condicion}. `)
        todasLasCondiciones = false;
      }
    }
    if (todasLasCondiciones) {
        alert("Toda las consiciones se cumplen. El partido puede comenzar!")
    }
}

/* 3) en base a una lista de peliculas donde cada pelicula tiene. Nombre, Año de Estreno, Id
Ordenar todos los objetos de la misma por nombre y mostrarlo por pantalla.
3.b) Hacer que se pueda ordenar con un boton HTML ascendente y descendente.*/
//array
const peliculas = [
    { nombre: "The Shawshank Redemption", anioEstreno: 1994, id: 1 },
    { nombre: "The Godfather", anioEstreno: 1972, id: 2 },
    { nombre: "The Dark Knight", anioEstreno: 2008, id: 3 },
    { nombre: "The Lord of the Rings: The Fellowship of the Ring", anioEstreno: 2001, id: 4 },
    { nombre: "Pulp Fiction", anioEstreno: 1994, id: 5 }
];
//botones
const botonOrdenarAsc = document.getElementById("btn-mostrarPelisAsc");
const botonOrdenarDes = document.getElementById("btn-mostrarPelisDes");
//contenedores
const containerAsc = document.getElementById("pelis-asc-container");
const containerDes = document.getElementById("pelis-des-container");
//eventos
botonOrdenarAsc.addEventListener("click", function() {
    mostrarEnOrdenAsc(peliculas, containerAsc)
});
botonOrdenarDes.addEventListener("click", function() {
    mostrarEnOrdenDes(peliculas, containerDes)
});
//funciones mostrar asc-des
function mostrarEnOrdenAsc(peliculas, container) {
    peliculas.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    cargarContenido(peliculas, container)
}
function mostrarEnOrdenDes(peliculas, container) {
    peliculas.sort((a, b) => b.nombre.localeCompare(a.nombre));
    cargarContenido(peliculas, container)
}
//funcion para mostrar el contenido
function cargarContenido(peliculas, container) {
    const ul = document.createElement("ul");
    if (container.classList.contains("visible")) {
        container.classList.remove("visible");
      }else {
        container.innerHTML = ""; //elimina el contenido cargado anteriormente
        container.classList.add("visible");
      }
    peliculas.forEach(pelicula => {
      const li = document.createElement("li");
      li.textContent = `${pelicula.nombre}`;
      ul.appendChild(li);
    });
    container.appendChild(ul);
}


/* 3.c) Poder eliminar algun elemento de la lista en base a un Id
3.e) Con un boton de html poder generar por pantalla el resultado de todas las peliculas
de forma "Pelicula(año de estreno)"

4) Hacer un metodo que reciba un array de string y devuelva otro pero todo pasado a mayuscula */
