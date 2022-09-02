export default function ({ $axios, redirect, store }) {
    $axios.onError(error => {
      if (error.response.status === 401) {
        store.state.userObj = null
        localStorage.removeItem('userObj')
        redirect('/')
      }
    })
  }