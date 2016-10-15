import React, { Component } from 'react';
import './settingsdropdown.scss';

class SettingsDropdown extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    toggleSettings () {
        this.setState({
            isVisible: !this.state.isVisible
        });
    };

    render () {
        return (
            <li className="appInfo_item subNav settingsApp">
                <a onClick={this.toggleSettings.bind(this)} className="subNav_button"><i className="fa fa-cog"></i></a>
                <ul className="subNav_nav" data-isvisible={this.state.isVisible}>
                  <li className="subNav_nav_item" data-ng-controller="AboutCtrl">
                    <a data-ng-click="openModal()">About</a>
                  </li>
                  <li className="subNav_nav_item">
                    <a data-ui-sref="settings">Settings</a>
                  </li>
                  <li className="subNav_nav_item">
                    <a data-ui-sref="news">News</a>
                  </li>
                  <li className="subNav_nav_item">
                    <a>Shortcuts (shift + ?)</a>
                  </li>
                </ul>
            </li>
        )
    }
}

export default SettingsDropdown;
