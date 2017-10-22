import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage2, unselectPage2} from '../../reducers/reducer'

class Wizard2 extends Component {

  componentDidMount() {
    this.props.selectPage2()
  }

  render() {
    return(
      <div>
        <div className="justCenter">
          <h3>Address</h3>
          <input className="nameInput" placeholder="Type in your address here."/>
        </div>
        <div className="dualInputs">
          <h3>City</h3>
          <h3>State</h3>
          <h3>Zip</h3>
        </div>
        <div className="dualInputs">
          <input placeholder="Type in your city." />
          <input placeholder="Type in your state." />
          <input placeholder="Type in your zip code here."/>
        </div>
        <div className="statusHolder">
          <div className="smallButton">
            <Link to="/wizard/1">
            <h2>Back</h2>
            </Link>
          </div>
          <div className="smallButton">
            <Link to="/wizard/3">
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

export default connect(MapStateToProps, {selectPage2})(Wizard2)
