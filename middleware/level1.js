export default function({ redirect, store}) {
  console.log(store.state.userObj);
    if (!store.state.userObj || store.state.userObj.role != 'admin' || store.state.userObj.role != 'user') {
      redirect('/')
    }
  }