<template>
    <div>
        <h1>Area personal</h1>
        <nuxt-link to="/dashboard">VOLVER</nuxt-link>

    </div>
</template>

<script>

    export default {
        name: 'areaPersonal',
        mounted() {
            this.$store.dispatch('getUserObj')
        },
        data() {
            return {
            }
        },
        middleware: ['levelUser']
    }
</script>

<style scoped>

</style>