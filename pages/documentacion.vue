<template>
    <div>
        <h1>Documentación</h1>
        <nuxt-link to="/dashboard">VOLVER</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: 'documentacion',
        mounted() {
            this.$store.dispatch('getUserObj')
        },
        middleware: ['levelAdmin'],
    }
</script>

<style scoped>

</style>