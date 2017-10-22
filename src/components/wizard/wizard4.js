import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage4} from '../../reducers/reducer'

class Wizard4 extends Component {

  componentDidMount() {
    this.props.selectPage4()
  }

  render() {
    return(
      <div>
        <div className="justCenter">
          <h3>Loan Amount</h3>
          <input className="nameInput" placeholder="Type in your loan amount."/>
          <h3>Monthly Mortgage</h3>
          <input className="nameInput" placeholder="Type in your monthly mortgage."/>
        </div>
        <div className="statusHolder">
          <div className="smallButton">
            <Link to="/wizard/3">
            <h2>Back</h2>
            </Link>
          </div>
          <div className="smallButton">
            <Link to="/wizard/5">
            <h2>Next</h2>
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

export default connect(MapStateToProps, {selectPage4})(Wizard4)
