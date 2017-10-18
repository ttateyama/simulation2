import React, {Component} from 'react'

import router from '../Router';

export default class Nav extends Component {
  render() {
    return(
      <div>
        <div className="wallsContainer">
          <div className="leftWall" id="gradGreenRight" />
          <div className="middle">
            <div className="middleWall">
            {router}
            </div>
          </div>
          <div className="rightWall" id="gradGreenLeft"/>
        </div>
      </div>
    )
  }
}
