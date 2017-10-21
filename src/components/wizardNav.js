import React, {Component} from 'react'

import { Link, Route } from "react-router-dom"
import {connect} from 'react-redux'

import Wizard2 from './wizard/wizard2'

class Wizard extends Component {


  getLoadingBoxClass = (item) => {
    if (this.props.onPage === 1) {
      if (item === 1) {
        return 'loading-box-full'
      }
      if (item === 2) {
        return 'loading-box-blank'
      }
      if (item === 3) {
        return 'loading-box-blank'
      }
      if (item === 4) {
        return 'loading-box-blank'
      }
      if (item === 5) {
        return 'loading-box-blank'
      }
  }
  if (this.props.onPage === 2) {
    if (item === 1) {
      return 'loading-box-check'
      var check = true
    }
    if (item === 2) {
      return 'loading-box-full'
    }
    if (item === 3) {
      return 'loading-box-blank'
    }
    if (item === 4) {
      return 'loading-box-blank'
    }
    if (item === 5) {
      return 'loading-box-blank'
    }
}
if (this.props.onPage === 3) {
  if (item === 1) {
    return 'loading-box-check'
  }
  if (item === 2) {
    return 'loading-box-check'
  }
  if (item === 3) {
    return 'loading-box-full'
  }
  if (item === 4) {
    return 'loading-box-blank'
  }
  if (item === 5) {
    return 'loading-box-blank'
  }
}
if (this.props.onPage === 4) {
  if (item === 1) {
    return 'loading-box-check'
  }
  if (item === 2) {
    return 'loading-box-check'
  }
  if (item === 3) {
    return 'loading-box-check'
  }
  if (item === 4) {
    return 'loading-box-full'
  }
  if (item === 5) {
    return 'loading-box-blank'
  }
}
if (this.props.onPage === 5) {
  if (item === 1) {
    return 'loading-box-check'
  }
  if (item === 2) {
    return 'loading-box-check'
  }
  if (item === 3) {
    return 'loading-box-check'
  }
  if (item === 4) {
    return 'loading-box-check'
  }
  if (item === 5) {
    return 'loading-box-full'
  }
}
}


  render() {
    return (
      <div className="largeContainer">
        <div className="headerBar">
          <div className="houseIcon">
           <h2>Wizard</h2>
           <Link to="/dashboard">
           <h2>Cancel</h2>
           </Link>
          </div>
        </div>
        <div className="statusBar">
          <h2>Stage {this.props.onPage}</h2>
        <div className="loadingBar">
          {[1, 2, 3, 4, 5].map((item) => {
            return <div className={this.getLoadingBoxClass(item)} />
          })}
        </div>
        </div>
        <div className="thinDivider"/>
        {this.props.children}
      </div>
    )
  }
}

function MapStateToProps(state) {
  return(
    state
  )
}
export default connect(MapStateToProps)(Wizard)
