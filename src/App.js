// @flow
import * as React from 'react'
import { Route, Redirect } from "react-router-dom"
import Login from './pages/Login'
import CreateService from "./pages/CreateService"

type Props = {}
type State = {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">               
        <Route exact path="/" render={() => (
          window.localStorage.getItem('token') ? <Redirect to="/service/create"/> : <Login />
        )} />
        <Route exact path="/service/create" render={() => (
          !window.localStorage.getItem('token') ? <Redirect to="/"/> : <CreateService />
        )}></Route>
      </div>
    );
  }
}

export default App
