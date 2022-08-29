<template>
    <div>
        <h1>Area personal</h1>
        <nuxt-link to="/dashboard">VOLVER</nuxt-link>
        {{  }}

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
        //   getUserObj() {
        //     this.$store.dispatch('getUserObj').then(response => {
        //         return response
        //     })
            
        //   }
        }
        
    }
</script>

<style scoped>

</style>