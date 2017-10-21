import React, {Component} from 'react'

import { Link } from "react-router-dom";

export default class DashboardNav extends Component {
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
        <input placeholder="Enter Desired Rent" />
        <div className="resetButtonsContainer">
          <div className="smallButton">
            <h3>Filter</h3>
          </div>
            <div className="smallButton">
              <h3>Reset</h3>
            </div>
        </div>
        <div className="thinDivider"/>
      </div>
    </div>
    )
  }
}
