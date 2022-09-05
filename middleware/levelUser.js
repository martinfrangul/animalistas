export default function({ redirect, store}) {
      if (!store.state.userObj) {
        redirect('/dashboard')
      }
    }