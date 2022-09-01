export default function({ redirect, store }) {
    console.log('soy el middle');
    if (!store.state.userObj || store.state.userObj.role != 'user') {
      redirect(('/'))
    }
  }