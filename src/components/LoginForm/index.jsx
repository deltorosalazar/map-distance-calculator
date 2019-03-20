import * as React from 'react'
import LoginFormView from './LoginFormView'

type Props = {
  handleSubmit: Function
} 
type State = {} 

class LoginForm extends React.Component<Props, State> {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin()
  }

  render() {
    return (
      <LoginFormView 
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default LoginForm