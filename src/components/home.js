import React, {Component} from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {login, password} from '../reducers/reducer'

class Home extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  eventHandlerName(event) {
    this.setState({
      username: event
    })
    console.log(this.state)
    this.props.login(this.state.username)
  }

  eventHandlerPass(event) {
    this.setState({
      password: event
    })
    console.log(this.state)
    this.props.password(this.state.password)
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="houseLogo" />
        <div className="inputBoxes">
          <input onChange={(event) => this.eventHandlerName(event.target.value)} placeholder="Username"></input>
          <input onChange={(event) => this.eventHandlerPass(event.target.value)} placeholder="Password"></input>
        </div>
        <div className="loginButtons">
          <div className="login">
            <Link to="/dashboard">
            <h2>Login</h2>
            </Link>
          </div>
          <div className="register">
            <h2>Register</h2>
          </div>
        </div>
      </div>
    )
  }
}

function MapStateToProps(state) {
  return(
    console.log(state),
    state
  )
}

export default connect(MapStateToProps, {login, password})(Home)
