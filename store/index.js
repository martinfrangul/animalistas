import axios from "axios"

export const state = () => ({
        userObject: null,
        prueba: null
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
      if (this.userObject == null) {
        const response = await axios.get("https://animalistas.herokuapp.com/user", {withCredentials:true }).then(resp => console.log(resp))
        
        context.commit('userObject', response)
      }
      else {
        return userObject
      }
    }
}