const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        dos : false,
        uno : true, 
        otro : 'Este es otro mensaje'

    },
    //se ejecuta cada vez que cambia alguna de sus variables
    computed: {
        valor(){
            console.log('Evaluando!!')
            return this.uno && this.dos && this.message == 'HOLA'; //false
        },
        otrovalor(){
            console.log('Evaluando dos!!')
            return this.otro == 'HOLA'; //false
        }
    }
})