/* En base a condiciones poder decir si un partido de futbol reune todas las condiciones 
para empezar. En caso que alguna condicion no este aprobada (valor fale), mostrar por pantalla
entonces el porque de la misma. */

const condiciones = [
    {condicion:"Debe haber pelota", valor:true},
    {condicion:"El equipo A tiene 11 jugadores", valor:true},
    {condicion:"El equipo B tiene 11 jugadores", valor:false},
    {condicion:"Todos los jugadores son mayores de 18", valor:true},
    {condicion:"Las condiciones climaticas son buenas", valor:false},
];

const botonVerificar = document.getElementById("btn-verificar");
botonVerificar.addEventListener("click", function() {
    verificar(condiciones)
});

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
3.b) Hacer que se pueda ordenar con un boton HTML ascendente y descendente.
3.c) Poder eliminar algun elemento de la lista en base a un Id
3.e) Con un boton de html poder generar por pantalla el resultado de todas las peliculas
de forma "Pelicula(año de estreno)"
4) Hacer un metodo que reciba un array de string y devuelva otro pero todo pasado a mayuscula
 */

/* const peliculas = [
{   nombre: 'peli1',
    anio  : 1997,
    id    : 1
},
{   nombre: 'forrest',
    anio  : 1997,
    id    : 1
},
{   nombre: 'titanic',
    anio  : 1997,
    id    : 1
},
] */
