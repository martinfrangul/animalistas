export default function({ redirect, store}) {
    console.log(store.state.userObj);
      if (!store.state.userObj) {
        redirect('/')
      }
    }