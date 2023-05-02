<script>
export default {
    data() {
        return {
        count: 0
        }
    },
    methods: {
        saludar() {
            alert('Hola ' + this.count)
        }
    }
}
</script>
<template>
    <input type="button" value="Personaje">
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>
<style scoped>
</style>