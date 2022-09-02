<template>
    <div>
        <h1>Responsables de colonias</h1>
        <nuxt-link to="/dashboard">VOLVER</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: 'responsablesColonias',
        mounted() {
            this.$store.dispatch('getUserObj')
        },
        middleware: ['levelMember']
    }
</script>

<style scoped>

</style>