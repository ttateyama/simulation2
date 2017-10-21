import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage5, unselectPage5} from '../../reducers/reducer'

class Wizard5 extends Component {

  componentDidMount() {
    this.props.selectPage5()
  }

  componentWillUnmount() {
  this.props.unselectPage5()
  }

  render() {
    return (
      <div>
        <div className="justCenter">
          <h3>Recommended Rent: Null</h3>
          <h3>Desired Rent</h3>
          <input className="nameInput" placeholder="Type in your loan amount."/>
        </div>
        <div className="statusHolder">
          <div className="smallButton">
            <Link to="/wizard/4">
            <h2>Back</h2>
            </Link>
          </div>
          <div className="smallButton">
            <Link to="/wizard/1">
            <h2>Done</h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function MapStateToProps(state) {
  return(
    state
  )
}

export default connect(MapStateToProps, {selectPage5, unselectPage5})(Wizard5)
