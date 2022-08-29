export const state = () => ({
        userObject: null
})
  
export const mutations = {
    userObject (state, response) {
        state.userObject = response
      }
}

export const actions = {

    async getUserObj(context) {
      let expired = false

      //CAMBIA DE DATE A UNIX-TIME Y SETEA BOOLEANO//

      let unixDate = Math.round(+new Date()/1000)
      if (this.state.userObject == null || unixDate > this.state.userObject.exp) {
        const response = await this.$axios.$get("https://animalistasback.onrender.com/user",
        {withCredentials:true })
        context.commit('userObject', response.data)
      }

      return this.userObject
    },


    
}

export const getters = {


  // changeDate(state) {
  //   this.unixDate = Math.round(+new Date()/1000);// unix timestamp
  // }

}