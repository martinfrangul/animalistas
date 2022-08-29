export const state = () => ({
  userObj : null
})
  
export const mutations = {
    setUserObj(state, data) {
      state.userObj = data
    }
}

export const actions = {

  async getUserObj(context) {
    console.log('entramos a la action');
    let unixDate = Math.round(+new Date()/1000)
    if (context.state.userObj == null || context.state.userObj.exp < unixDate){
      console.log('entramos al primer if');
      if (localStorage.getItem('userObject') == null || unixDate > localStorage.getItem('userObject').exp) {
        console.log('se pide al backend');
        await this.$axios.get("https://animalistasback.onrender.com/user",
        {withCredentials:true }).then(response => {
          localStorage.setItem('userObject', JSON.stringify(response.data))
          console.log(response);
        })
      }
      context.commit('setUserObj', localStorage.getItem('userObject'))
    }

    return context.state.userObj
  },

}

export const getters = {
  // changeDate(state) {
  //   this.unixDate = Math.round(+new Date()/1000);// unix timestamp
  // }

}