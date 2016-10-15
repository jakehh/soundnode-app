import React, { Component } from 'react';
import './appupdate.scss';

/**
 * This returns the History Actions component and its dependencies.
 */
class AppUpdate extends Component {

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
      <li className="appInfo_item">
        <a href="http://www.soundnodeapp.com" target="_blank"> update available! </a>
      </li>
    )
  }
}

export default AppUpdate;
