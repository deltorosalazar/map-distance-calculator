// @flow 
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { findDistance, resetRequestValues } from '../../redux/actions/service'
import { connect } from 'react-redux'
import CreateServiceView from "./CreateServiceView"

type Props = {
  handleLogout: Function,
  history: Object
}

class CreateService extends React.Component<Props, {}> {
  handleLogout = () => {
    window.localStorage.removeItem('token')
    this.props.history.push('/')
  }

  render() {
    return (
      <CreateServiceView    
        handleLogout={this.handleLogout}    
        {...this.props}
      />
    )
  }
}

const mapStateToProps = ({serviceReducer}) => {
  return {
    onRequest: serviceReducer.onRequest,
    onRequestSuccess: serviceReducer.onRequestSuccess,
    onRequestFailure: serviceReducer.onRequestFailure,
    results: serviceReducer.results,
  }
}

const mapDispatchToProps = {
  findDistance,
  resetRequestValues
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateService))