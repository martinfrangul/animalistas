export default function({ redirect, store}) {
  if (!store.state.userObj || !['admin', 'manager', 'carer'].includes(store.state.userObj.role)) {
    redirect('/dashboard')
  }
}