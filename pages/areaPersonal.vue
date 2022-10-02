<template>
    <div class="general-container">
        <Header></Header>
        <div class="general-container__page">
            <h1>Area personal</h1>
            <nuxt-link to="/dashboard">VOLVER</nuxt-link>
        </div>
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

<style lang="scss">
@import '../styles/styles.scss';
</style>