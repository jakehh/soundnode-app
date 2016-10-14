import React, { Component } from 'react';
import './appinfo.scss';

/**
 * This returns the History Actions component and its dependencies.
 */
class AppInfo extends Component {

  /**
   * When the component is added, add our event listeners.
   */
  componentDidMount () {
    /**
     * Check for updates
     */
  }

  /**
   * When the component is being destroyed, kill our event listeners.
   */
  componentWillUnmount () {}


  render () {
    return (
      <ul className="appInfo">
        <li className="appInfo_item subNav settingsApp"></li>
        <li className="appInfo_item">
          <a href="http://www.soundnodeapp.com" target="_blank"> update available! </a>
        </li>
      </ul>
    )
  }
}

export default AppInfo;
