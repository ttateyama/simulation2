import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage1, propertyName} from '../../reducers/reducer'

class Wizard1 extends Component {

  constructor() {
    super()

    this.state = {
      property_name: ''
    }
  }

  eventHandlerPropertyName(event) {
    this.setState({
      property_name: event
    })
    console.log(this.state)
    this.props.propertyName(this.state.property_name)
  }

componentDidMount() {
  this.props.selectPage1()
}
  render() {
    return(
      <div className="justCenter">
        <h3>Property Name</h3>
        <input onChange={(event) => this.eventHandlerPropertyName(event.target.value)} className="nameInput" placeholder="Type in the name of your property."/>
        <h3>Property Description</h3>
        <input className="descInput" placeholder="Type in your property description."/>
        <div className="statusHolderPage1">
          <div className="smallButton">
            <Link to="/wizard/2">
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
    console.log(state),
    state
  )
}

export default connect(MapStateToProps, {selectPage1, propertyName})(Wizard1)
