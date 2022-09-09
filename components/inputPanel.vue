<template>
    <div>
        <div class="inputsCont">
            <label for="name">Nombre</label>
            <input class="input" id="name" type="text" v-model="name">
            
            <label for="location">Locación</label>
            <input class="input" id="location" v-model="location">
        
            <label for="zone">Zona</label>
            <input class="input" id="zone" v-model="zone">
        </div>

        <!-- Geolocalización -->
        <div class="geoCont">
            <h3>GEOLOCALIZACIÓN</h3>
            <label for="geoLat">Geolocalización: Latitud</label>
            <input class="input" id="geoLat" v-model="geolocation.geolocationLat">
            
            
            <label for="geoLon">Geolocalización: Longitud</label>
            <input class="input" id="geoLon" v-model="geolocation.geolocationLon">
        </div>
        
        <!-- Gatos -->
        <div class="gatosCont">
            <h3>GATOS</h3>
            <label for="catF">Femenino</label>
            <input class="input" id="catF" type="text" v-model="cats.catF">
            
            <label for="catM">Masculino</label>
            <input class="input" id="catM" type="text" v-model="cats.catM">
            
            <label for="catI">Irmafrodita</label>
            <input class="input" id="catI" type="text" v-model="cats.catI">
        </div>

        <!-- Esterilizados -->
        <div class="esterCont">

            <h3>ESTERILIZADOS</h3>


            <label for="sterF">Femenino</label>
            <input class="input" id="sterF" type="text" v-model="ster.sterF">
            
            <label for="sterM">Masculino</label>
            <input class="input" id="sterM" type="text" v-model="ster.sterM">
            
            <label for="sterI">Irmafrodita</label>
            <input class="input" id="sterI" type="text" v-model="ster.sterI">
        </div>

        <b-button class="submitBTN btn-success" @click="submitForm()">ENVIAR</b-button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                location: '',
                zone: '',
                geolocation: {
                    geolocationLat: '',
                    geolocationLon: '', 
                },
                cats: {
                    catF: '',
                    catM: '',
                    catI: '',
                },
                ster: {
                    sterF: '',
                    sterM: '',
                    sterI: ''

                }
            }
        },

        methods: {
            submitForm() {
                this.$store.dispatch('addColonia', 
                this.name,
                this.location,
                this.zone,
                this.geolocation,
                this.cats,
                this.ster
                )
            }
        }
        
    }
</script>

<style scoped>

.gatosCont, .esterCont, .geoCont, .inputsCont {
    margin: 1rem 0px 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-items:flex-start;


}

.input {
    width: 25%;
}

.submitBTN {
    margin: 1rem;
}

</style>