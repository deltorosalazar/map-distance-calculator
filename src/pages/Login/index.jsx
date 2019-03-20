// @flow
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin } from '../../redux/actions/user'
import LoginView from './LoginView'

type Props = {
  handleLogin: Function,
  history: Object
}

class Login extends React.Component<Props> {
  handleLogin = () => {
    this.props.handleLogin()
    this.props.history.push('/service/create')
  }

  render() {
    return (
      <LoginView 
        handleLogin={this.handleLogin}
      />
    )
  }
}

const mapDispatchToProps = {
  handleLogin
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Login))