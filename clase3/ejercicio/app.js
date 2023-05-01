/* 1. Ordenar en base a changePercent24Hr
el siguiente Servicio de Api 
https://api.coincap.io/v2/assets/ */

const app = new Vue({
    el: '#app',
    data: {
      monedas : []
    },
    created: async function () {
        let coins = [];
        const resultado = await fetch('https://api.coincap.io/v2/assets/');                
        coins = await resultado.json();
        this.monedas = coins.data;
        console.log(this.monedas);
    },
});

/* 2. Si el valor changePercent24Hr es negativo
Pintarlo de rojo
Si es positivo, pintarlo de Verde
El que pueda hacer una escala, genial */

/* 3. Hacer un Select (dropdown)
con varias de las propiedades
y en base a esa seleccion poder ordenar la miList
y mostrarla obviamente por pantalla */