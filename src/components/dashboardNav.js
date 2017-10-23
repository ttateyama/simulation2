import React, {Component} from 'react'

import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {desire} from '../reducers/reducer'

class DashboardNav extends Component {

  constructor() {
    super()

    this.state = {
      desired_rent: ''
    }
  }

  eventHandlerDesired(event) {
    this.setState({
      desired_rent: event
    })
    console.log(this.state)
    this.props.desire(this.state.desired_rent)
  }

  render() {
    return (
      <div className="largeContainer">
      <div className="headerBar">
        <div className="houseIcon">
         <h2>Dashboard</h2>
         <Link to="/">
         <h2>Log Out</h2>
         </Link>
        </div>
      </div>
      <div className="addNewContainer">
        <Link to='/wizard/1'>
        <div className="addNewButton">
          <h3>Add New Listing</h3>
        </div>
        </Link>
        <h4>Filter properties with desired rent greater than:</h4>
        <input onChange={(event) => this.eventHandlerDesired(event.target.value)} placeholder="Enter Desired Rent" />
        <div className="resetButtonsContainer">
          <div className="smallButton">
            <h3>Filter</h3>
          </div>
            <div className="smallButton">
              <h3>Reset</h3>
            </div>
        </div>
        <div className="thinDivider"/>
        <div className="houseDisplay">
          <div className="housePreview">
           <style>{`.preview{background-image: url(${this.props.image_url})`}</style>
          </div>
          <div>
          <p>Property Name: {this.props.name}</p>
            <p>Property Description: {this.props.description}</p>
            <p>Property Address: {this.props.address}</p>
            <p>Property City: {this.props.city}</p>
            <p>Property State: {this.props.state}</p>
            <p>Property ZIP: {this.props.zip}</p>
          </div>
          <div>
            <p>Loan Amount: {this.props.loan_amount}</p>
            <p>Monthly Amount: {this.props.monthly_amount}</p>
            <p>Desired Rent: {this.props.desired_rent}</p>
          </div>
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

export default connect(MapStateToProps, {desire})(DashboardNav)
