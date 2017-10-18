import React, {Component} from 'react'

import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="houseLogo" />
        <div className="loginButtons">
          <div className="login">
            <Link to="/login">
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
