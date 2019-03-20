export const ON_REQUEST = '@liftit/user/ON_REQUEST'
export const ON_REQUEST_SUCCESS = '@liftit/user/ON_REQUEST_SUCCESS'
export const ON_REQUEST_FAILURE = '@liftit/user/ON_REQUEST_FAILURE'

export const onRequest = () => {
  return {
    type: ON_REQUEST
  }
}

export const onRequestSuccess = () => {
  return {
    type: ON_REQUEST_SUCCESS
  }
}

export const onRequestFailure = () => {
  return {
    type: ON_REQUEST_FAILURE
  }
}

export const handleLogin = () => (dispatch, getState) => {
  const { form } = getState()

  const email = encodeURIComponent(form.loginForm.values.email)
  const password = encodeURIComponent(form.loginForm.values.password)

  const token = new Buffer(email + password).toString('base64')

  window.localStorage.setItem('token', token)
}
