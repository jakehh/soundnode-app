import React, { Component } from 'react';
import './historyactions.scss';

/**
 * This returns the History Actions component and its dependencies.
 */
class HistoryActions extends Component {

  goBack () {
    window.history.back();
  }

  goForward () {
    window.history.forward();
  }

  /**
   * When the component is added, add our event listeners.
   */
  componentDidMount () {
    window.document.querySelector("[data-role='goBack']").addEventListener('click', this.goBack);
    window.document.querySelector("[data-role='goForward']").addEventListener('click', this.goForward);
  }

  /**
   * When the component is being destroyed, kill our event listeners.
   */
  componentWillUnmount () {
    window.document.querySelector("[data-role='goBack']").addEventListener('click');
    window.document.querySelector("[data-role='goForward']").addEventListener('click');
  }


  render () {
    return (
      <ul className="windowAction">
        <li className="windowAction_item navigationButton goBack" data-role="goBack">
          <i className="fa fa-chevron-left"></i>
        </li>
        <li className="windowAction_item navigationButton goForward" data-role="goForward">
          <i className="fa fa-chevron-right"></i>
        </li>
      </ul>
    )
  }
}

export default HistoryActions;
