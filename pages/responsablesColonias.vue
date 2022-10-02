<template>
    <div class="general-container">
        <Header></Header>
        <div class="general-container__page">
            <h1>Responsables de colonias</h1>
            <nuxt-link to="/dashboard">VOLVER</nuxt-link>
        </div>
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

<style lang="scss">
@import '../styles/styles.scss';
</style>