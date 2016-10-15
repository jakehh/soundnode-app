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

  render () {
    return (
      <ul className="windowAction">
        <li className="windowAction_item navigationButton goBack" onClick={this.goBack}>
          <i className="fa fa-chevron-left"></i>
        </li>
        <li className="windowAction_item navigationButton goForward" onClick={this.goForward}>
          <i className="fa fa-chevron-right"></i>
        </li>
      </ul>
    )
  }
}

export default HistoryActions;
