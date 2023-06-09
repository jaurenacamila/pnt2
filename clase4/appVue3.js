const app = Vue.createApp({
    data() {
        return {
          cantidad : 0
        }
      },
    methods: {
        //es el valor del componente, en este caso: click!!
        actualizarclicks(e) {
            console.log('Llamo al padre!');
            console.log(e);
            this.cantidad++;
        }
    }
});

app.component('personaje3', {
    data(){
        return {

        }
    },
    template: `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{this.apellido}}, {{this.nombre}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <input type='button' @click='personajeClick()' value="Enviar!">
                    </div>
                </div>`,
    props:['nombre', 'apellido'],
    methods:{
        personajeClick() {
            console.log('Se toco el personaje ' + this.nombre);
            //nombre del evento en html y valor
            this.$emit('click-personaje', 'click!!');
        }
    }
});

app.mount('#app');

//de arriba hacia abajo me comunico con las propiedades
//de hijo a padre me comunico a traves de emit