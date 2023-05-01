const app = new Vue({
    el: '#app',
    data: {
        jugadorA : {
            nombre : 'Camila',
            stamina : 100
        },
        jugadorB : {
            nombre : 'Computadora',
            stamina : 100
        },
        jugadorJugando : null,
        jugadorNoJugando : null
    },
    methods : {
        atacar() {
            const min = 5;
            const max = 10;
            const randomNumber = Math.random() * (max - min) + min; //hacer entero
            this.jugadorNoJugando.stamina -= randomNumber;
            console.log('golpeaste en: ' + randomNumber);
            this.chequearquiengano()
            this.cambiarTurno()
        },
        curar() {
            alert('curo!');
        },
        chequearquiengano() {
            if (this.jugadorNoJugando.stamina <= 0) {
                alert(this.jugadorNoJugando.nombre + " Perdio");
            }
        },
        cambiarTurno() {
            if (this.jugadorJugando == this.jugadorA) {
                this.jugadorJugando = this.jugadorB;
                this.jugadorNoJugando = this.jugadorA;
            }
            else {
                this.jugadorNoJugando = this.jugadorB;
                this.jugadorJugando = this.jugadorA;
            }
        }
    },
    created: function () {
        this.jugadorJugando = this.jugadorA;
        this.jugadorNoJugando = this.jugadorB;
    }
});