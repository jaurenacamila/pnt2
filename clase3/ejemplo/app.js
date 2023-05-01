var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      miMensaje: 'Hola Cami',
      valor: 0,
      maxid: 0,
      mostrando : true,
      miLista: [
        {id: 1, nombre:'Eduardo', genero: 'femenino'},
        {id: 2, nombre:'Sebastian', genero: 'masculino'},
        {id: 3, nombre:'Maria', genero: 'trans'},
      ],
      personajes : []
    },
    methods: {
        agregarPersona() 
        {
            this.maxid++;
            const persona = {id: this.maxid, nombre:'xxxx', genero: 'femenino'};
            this.miLista.push(persona);
        }
    },
    mounted: function () {
        console.log('Montado! ' + this.miLista.length);
        this.maxid = Math.max(...this.miLista.map(o=>o.id));
    },
    created: async function () {
        const resultado = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5');                
        this.personajes = await resultado.json();
        console.log(this.personajes);
    },
})