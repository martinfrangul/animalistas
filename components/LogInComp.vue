<template>
    <div class="container-gral d-flex justify-content-center align-items-center">
        <div class="loginCont">
            <div id="googleButton"></div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import { toRef } from 'vue'

export default {
    name: 'LogInComp',
    mounted() {
    // initialize Google Sign in  
    google.accounts.id.initialize({
        client_id: '996838561351-1jq7n8tibe738b83rk6r9g6nto8st58u.apps.googleusercontent.com',
        callback: this.handleCredentialResponse,  //method to run after user clicks the Google sign in button
        context: 'signin'
      })
    
    // render button
    google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { 
        type: 'standard',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
        logo_alignment: 'center',
        width: 250
      }
    )
    google.accounts.id.prompt()
  },
  methods: {
    
      // call your backend API here
      async googleAuth(idToken)  {
        const response = await axios.post("https://animalistas.herokuapp.com/googlelogin", {
          idToken
        }, {withCredentials:true })


        //Manejo de errores

        if (response.status == 200 || 201 && !this.$store.state.userObject)
          this.$store.dispatch('createUserObject', response.data)
          this.$router.push('/dashboard')

          
      },
      // the token can be accessed as: response.credential

      handleCredentialResponse(response) {
        this.googleAuth(response.credential)
      },
      
    
  }
    
}
</script>

<style>
    .container-gral {
        height: 100vh;
    }
</style>