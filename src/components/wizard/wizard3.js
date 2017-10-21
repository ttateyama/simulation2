import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage3, unselectPage3} from '../../reducers/reducer'

class Wizard3 extends Component {

  componentDidMount() {
    this.props.selectPage3()
  }

  componentWillUnmount() {
  this.props.unselectPage3()
  }

  render() {
    return(
      <div className="justCenter">
        <h3>Upload an image of your property.</h3>
        <div className="preview">
          <h3>Preview</h3>
        </div>
        <div className="justCenter">
          <h3>Image URL</h3>
          <input className="nameInput" placeholder="Copy & paste your image URL." />
        </div>
          <div className="statusHolder">
        <div className="smallButton">
          <Link to="/wizard/2">
          <h2>Back</h2>
          </Link>
        </div>
          <div className="smallButton">
            <Link to="/wizard/4">
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

export default connect(MapStateToProps, {selectPage3, unselectPage3})(Wizard3)
