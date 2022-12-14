
export const state = () => ({
  userObj: null,
})
  
export const mutations = {
    setUserObj(state, data) {
      state.userObj = data
    },

    logOut(state) {
      state.userObj = null
      localStorage.removeItem('userObj')
    }
}

export const actions = {

  async getUserObj(context) {
    let unixDate = Math.round(+new Date()/1000)
    if (context.state.userObj == null || context.state.userObj.exp < unixDate){
      if (localStorage.getItem('userObj') == null || unixDate > JSON.parse(localStorage.getItem('userObj')).exp) {
        await this.$axios.get("https://animalistasback.onrender.com/user",
        {withCredentials:true }).then(response => {
          localStorage.setItem('userObj', JSON.stringify(response.data))
        })
      }
      context.commit('setUserObj', JSON.parse(localStorage.getItem('userObj')))
    }

    return context.state.userObj
  },

}

export const getters = {
  

}