export default function({ store, redirect }) {

    // INFO DEL ROUTER EN NUXT
    //console.log($nuxt.$router.history);

        if (!store.state.userObj || store.state.userObj.role != 'user') {
            redirect('/dashboard')
        }
    }