let counter = 0;
const counterElement = document.getElementById("counter");

function increment() {
    counter++;
    counterElement.innerText = counter;
}

function decrement() {
    counter--;
    counterElement.innerText = counter;
}


////////////////////////////////////////////////////////////////////////
/* 1.hacer un botón para agregar al vector un numero random de 1 a 10
2.hacer otro btotn que muestre en pantalla todo el vector!!*/

const numeros = [];

function addRandom() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    numeros.push(randomNum);
    document.getElementById("numeros").innerHTML = numeros.join(" - ");
}


////////////////////////////////////////////////////////////////////////
/* 3. hacer otro botón que ordene el vector */

function ordenar() {
    numeros.sort(function(a, b) {
        return a - b;
    });
    document.getElementById("numeros").innerHTML = numeros.join(" - ");
}

////////////////////////////////////////////////////////////////////////
/* 4. en base a un input de tipo texto, que pone un valor de 1 a 10, 
validar que dentro del vector exista el elemento, en caso de ser positivo, 
que ponga todo el fondo de la pantalla en verde, caso negativo en rojo! */

function validar() {
    const userInput = document.getElementById("userInput").value;
    const section = document.getElementById('fondo');
    if (numeros.includes(parseInt(userInput))) { 
        section.style.backgroundColor = 'green';
    } else {
        section.style.backgroundColor = 'red';
    }
}