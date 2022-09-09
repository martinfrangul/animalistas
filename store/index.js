
export const state = () => ({
  userObj: null,
  colonias: [],
})
  
export const mutations = {
    setUserObj(state, data) {
      state.userObj = data
    },

    getColonias(state, data) {
      state.colonias = data
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

  //COLONIAS

  async getColonias(context) {
    await this.$axios.get("https://animalistasback.onrender.com/colonies",
    {withCredentials:true }).then(response => {
      context.commit('getColonias', response.data)
    })
  },

  async addColonia(name, location, zone, geolocation, cats, ster) {
    await this.$axios.post("https://animalistasback.onrender.com/colonies",
    {
      name: name,
      location: location,
      zone: zone,
      geolocation: geolocation,
      cats: cats,
      sterilized: ster
    },
    {withCredentials:true })
  }
}

export const getters = {
  

}