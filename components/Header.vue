
<template>
    <div class="header">
        <div class="header__container">
            <a to="/" class="header__container__logo">
                <img src="../assets/images/logo2.svg">
            </a>

            <nav class="header__container__nav">
                <!-- si la ruta actual es dashboard no mostrar los items-->
                <a class="header__container__nav__item">Inicio</a>
                <a class="header__container__nav__item">Colonias</a>
                <a class="header__container__nav__item">Responsables de colonias</a>
                <a class="header__container__nav__item">Documentación</a>
            </nav>
            <div class="header__container__user">
                <a class="link-h5" @click="logOut">LOGOUT</a>
            </div>
        </div>
    </div>
</template>

<script>


export default {

    methods: {
        logOut() {
            this.$store.commit('logOut')
            this.$router.push('/')
        },
        isCarer() {
            if (this.$store.state.userObj) {
                if (this.$store.state.userObj.role == 'carer'
                    || this.$store.state.userObj.role == 'member'
                    || this.$store.state.userObj.role == 'admin')
                    return true
            }
        },

        isMember() {
            if (this.$store.state.userObj) {
                if (this.$store.state.userObj.role == 'member'
                    || this.$store.state.userObj.role == 'admin')
                    return true
            }
        },

        isAdmin() {
            if (this.$store.state.userObj) {
                if (this.$store.state.userObj.role == 'admin')
                    return true
            }
        },
    },

}
</script>

<style lang="scss">
@import '../styles/styles.scss';
</style>
