
<template>
    <div class="general-container">

        <!-- <alert ref="alerta"></alert> -->
        <!-- PARA MOSTRAR ALERT PEGAR ESTO EN EL BOTÓN
                        @click="$refs.alerta.showAlert()" -->


        <Header></Header>

        <div class="sections general-container__page"
            v-bind:style="[this.$store.state.userObj && this.$store.state.userObj.role == 'member'? this.gridCol : this.gridRows]">
            <div class="section-container box-primary" to="/areaPersonal">
                <div class="section">
                    <h1 class="h2-stencil">Area personal</h1>
                </div>
            </div>

            <div class="section-container box-primary-contrast" v-if="isMember()" to="/colonias">
                <div class="section">
                    <h1 class="h2-stencil">Colonias</h1>
                </div>
            </div>

            <div class="section-container box-secondary" v-if="isAdmin()" to="/documentacion">
                <div class="section">
                    <h1 class="h2-stencil">Documentación</h1>
                </div>
            </div>

            <div class="section-container box-secondary-contrast" v-if="isCarer()" to="/responsablesColonias">
                <div class="section">
                    <h1 class="h2-stencil">Responsables de colonias</h1>
                </div>
            </div>
            <!-- Para agregar botones solo agregarlos igual que arriba que se agregan a la grilla 
                    Definir en el CSS las fracciones para la grilla. De a 1fr se agrega 1 columna o 1 row-->

        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'


export default {
    beforeCreate() {
        this.$store.dispatch("getUserObj");
    },
    methods: {
        logOut() {
            this.$store.commit("logOut");
            this.$router.push("/");
        },
        isCarer() {
            if (this.$store.state.userObj) {
                if (this.$store.state.userObj.role == "carer"
                    || this.$store.state.userObj.role == "member"
                    || this.$store.state.userObj.role == "admin")
                    return true;
            }
        },
        isMember() {
            if (this.$store.state.userObj) {
                if (this.$store.state.userObj.role == "member"
                    || this.$store.state.userObj.role == "admin")
                    return true;
            }
        },
        isAdmin() {
            if (this.$store.state.userObj) {
                if (this.$store.state.userObj.role == "admin")
                    return true;
            }
        },
    },
    data() {
        return {
            gridCol: "grid-template-columns: 1fr",
            gridRows: "grid-template-columns: 1fr"
            // Intentando hacer el CSS con dicionales. Seguir leyendo mañana
        };
    },
    components: { Header }
}
</script>

<style lang="scss">
@import '../styles/styles.scss';
</style>
