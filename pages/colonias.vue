<template>
    <div>
        <h1>Colonias</h1>
        <nuxt-link to="/dashboard">VOLVER</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: 'colonias',
        mounted() {
            this.$store.dispatch('getUserObj')
        },
        middleware: ['levelCarer']

    }
</script>

<style scoped>

</style>