<template>
    <div>

        <h1>Colonias</h1>
        <nuxt-link to="/dashboard">VOLVER</nuxt-link>
        <inputPanel></inputPanel>

        <li v-for="colonia in this.$store.state.colonias" :key="colonia.id">
            {{colonia}}
        </li>

    </div>
</template>

<script>
    export default {
        name: 'colonias',
        mounted() {
            this.$store.dispatch('getUserObj')
            this.$store.dispatch('getColonias')

        },
        middleware: ['levelCarer']

    }
</script>

<style scoped>

</style>