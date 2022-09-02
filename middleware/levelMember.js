export default function({ store, redirect }) {
    if (!store.state.userObj || !['admin', 'manager'].includes(store.state.userObj.role)) {
        redirect('/dashboard')
      }
    
}
