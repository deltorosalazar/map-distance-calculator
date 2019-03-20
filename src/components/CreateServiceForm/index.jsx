// @flow
import * as React from 'react'
import CreateServiceFormView from './CreateServiceFormView'

type Props = {
  handleSearch: Function
}

type State = {}

class CreateServiceForm extends React.Component<Props, State> {
  handleSearch = (e) => {
    e.preventDefault()
    this.props.handleSearch()
  }

  render() {
    return (
      <CreateServiceFormView
        handleSubmit={this.handleSearch}        
      />
    )
  }
}

export default CreateServiceForm