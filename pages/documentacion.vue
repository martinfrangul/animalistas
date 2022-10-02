<template>
    <div class="general-container">
        <Header></Header>
        <div class="general-container__page">
            <h1>Documentación</h1>
            <nuxt-link to="/dashboard">VOLVER</nuxt-link>
        </div>
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

<style lang="scss">
@import '../styles/styles.scss';
</style>