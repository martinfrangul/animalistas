
<template>
        <div class="container-gral">

            <div class="logOutCont">
                <b-button class="logOut" @click="logOut">LOGOUT</b-button>

            </div>

            <div class="sections">
                <b-button class="section-container" to="/areaPersonal">
                    <div class="section">
                        <h4>Area personal</h4>
                    </div>
                </b-button>
                    
                <b-button class="section-container" to="/colonias">
                    <div class="section">
                        <h4>Colonias</h4>
                    </div>
                </b-button>
                    
                <b-button class="section-container" to="/documentacion" :disabled='isDisabled'>
                    <div class="section">
                        <h4>Documentación</h4>
                    </div>
                </b-button>
                    
                <b-button class="section-container" to="/responsablesColonias">
                    <div class="section">
                        <h4>Responsables de colonias</h4>
                    </div>
                </b-button>
                <!-- Para agregar botones solo agregarlos igual que arriba que se agregan a la grilla 
                    Definir en el CSS las fracciones para la grilla. De a 1fr se agrega 1 columna o 1 row-->
                
            </div>
        </div>
</template>

<script>


    export default {
        mounted() {
            this.$store.dispatch('getUserObj')
        },
        methods: {
            logOut() {
                this.$store.commit('logOut')
                this.$router.push('/')
            }
        },
        data() {
            return {
                isDisabled: false
            }
        },

        computed: {
            roleChecker() {
                //AGREGAR LOS USUARIOS QUE QUIERO QUE DESABILITEN EL BOTÓN
                //TODO VER POR QUÉ NO ME TOMA ROLE
                if(this.$store.state.userObj.role == 'admin')
                    this.isDisabled = true

            }
        }
        // middleware: ['level2'],

    }
</script>

<style scoped>

.container-gral {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 100vh;
    width: 80%;
    margin: auto;
}

.sections {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 4rem;
}

.section-container {
    width: 200px;
    height: 200px;
    border: 3px solid black;
}

.section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
}

.logOutCont {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 20%;
    margin-bottom: 1rem;
}

.logOut {
    height: fit-content;
    width: fit-content;
}

</style>