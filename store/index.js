export const state = () => ({
        userObject: null
})
  
export const mutations = {
    userObject (state, response) {
        state.userObject = response
      }
}

export const actions = {    
    createUserObject (context, response) {
        context.commit('userObject', response)
      }
}