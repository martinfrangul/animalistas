
export const state = () => ({
  userObj: null,
})
  
export const mutations = {
    setUserObj(state, data) {
      state.userObj = data
    },

    logOut(state) {
      state.userObj = null
    }
}

export const actions = {

  async getUserObj(context) {
    let unixDate = Math.round(+new Date()/1000)
    if (context.state.userObj == null || context.state.userObj.exp < unixDate){
      if (localStorage.getItem('userObject') == null || unixDate > localStorage.getItem('userObject').exp) {
        await this.$axios.get("https://animalistasback.onrender.com/user",
        {withCredentials:true }).then(response => {
          localStorage.setItem('userObject', JSON.stringify(response.data))
        })
      }
      context.commit('setUserObj', localStorage.getItem('userObject'))
    }

    return context.state.userObj
  },

  

}

export const getters = {
  

}