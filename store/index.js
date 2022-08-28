import axios from "axios"

export const state = () => ({
        userObject: null,
        unixDate: ''
})
  
export const mutations = {
    userObject (state, response) {
        state.userObject = response
      },
      prueba (state, respuesta) {
        state.userObject = respuesta
      }
}

export const actions = {

    async getUserObj(context) {

            //CAMBIA DE DATE A UNIX-TIME Y SETEA BOOLEANO//
      // this.unixDate = Math.round(+new Date()/1000)
      //   if (unixDate >= this.userObject.exp)
      //     expired = true

          //VA A BUSCAR EL USER OBJECT O LO DEVUELVE//

        if (this.userObject == null) {
          const response = await axios.get("https://animalistasback.onrender.com/user",
          {withCredentials:true })
          
          context.commit('userObject', response)
        }
        else {
          this.response.data = userObject
          return userObject
        }
    },


    
}

export const getters = {


  // changeDate(state) {
  //   this.unixDate = Math.round(+new Date()/1000);// unix timestamp
  // }

}