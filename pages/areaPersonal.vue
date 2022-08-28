<template>
    <div>
        <h1>Area personal</h1>
        <nuxt-link to="/dashboard">VOLVER</nuxt-link>


        <!-- <p>Result = {{unixDate}}</p> -->
	    <button @click="this.$state.getters.changeDate()">Click Me</button>


    </div>
</template>

<script>

    export default {

        data() {
            return {
            }
        },

        mounted() {
          this.$store.dispatch('getUserObj')

        },


        methods:{
        }
        
    }
</script>

<style scoped>

</style>