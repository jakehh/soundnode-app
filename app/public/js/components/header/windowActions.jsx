import React, { Component } from "react";
import { css } from 'emotion';
const guiConfig = require('../../system/guiConfig').guiConfig;

class WindowActions extends Component {
  closeApp() {
    guiConfig.close();
  }

  minimizeApp() {
    guiConfig.minimize();
  }

  maximizeApp() {
    guiConfig.maximize();
  }

  get_linux_asset_image (image) {
    return image.backgroundImage.split("assets/")[1].split(`")`)[0];
  }

  get linux_close_button () {
    let close_button = (
      <li className="windowAction_item" onClick={this.closeApp} id="closeApp">
        <i className="fa fa-times"></i>
      </li>
    );
    if (process.platform === 'linux') {
      const linux_close = css`
        cursor: initial !important;
        background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_close)}) !important;
        width: 22px !important;
        height: 22px !important;
        margin-top: 8px !important;
        background-size: cover !important;

        &:hover {
          background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_close_hover)}) !important;
          background-size: cover !important;
        }

        &:active {
          background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_close_active)}) !important;
          background-size: cover !important;
        }
      `
      close_button = (
        <li className={`${linux_close} windowAction_item`} onClick={this.closeApp} id="closeApp"></li>
      );
    }

    return close_button;
  }

  get linux_minimize_button () {
    let close_button = (
      <li className="windowAction_item" onClick={this.closeApp} id="minimizeApp">
        <i className="fa fa-times"></i>
      </li>
    );
    if (process.platform === 'linux') {
      const linux_close = css`
        cursor: initial !important;
        background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_minimize)}) !important;
        width: 22px !important;
        height: 22px !important;
        margin-top: 8px !important;
        background-size: cover !important;

        &:hover {
          background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_minimize_hover)}) !important;
          background-size: cover !important;
        }

        &:active {
          background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_minimize_active)}) !important;
          background-size: cover !important;
        }
      `
      close_button = (
        <li className={`${linux_close} windowAction_item`} onClick={this.closeApp} id="minimizeApp"></li>
      );
    }

    return close_button;
  }

  get linux_maximize_button () {
    let close_button = (
      <li className="windowAction_item" onClick={this.minimizeApp} id="expandApp">
          <i className="fa fa-plus"></i>
        </li>
    );
    if (process.platform === 'linux') {
      const linux_close = css`
        cursor: initial !important;
        background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_maximize)}) !important;
        width: 22px !important;
        height: 22px !important;
        margin-top: 8px !important;
        background-size: cover !important;

        &:hover {
          background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_maximize_hover)}) !important;
          background-size: cover !important;
        }

        &:active {
          background: url(${this.props.linux_theme.theme.gtk_folder}assets/${this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_maximize_active)}) !important;
          background-size: cover !important;
        }
      `
      close_button = (
        <li className={`${linux_close} windowAction_item`} onClick={this.maximizeApp} id="expandApp"></li>
      );
    }

    return close_button;
  }

  render() {
    if (window.process.platform == 'linux32'
      || window.process.platform == 'linux64'
      || window.process.platform == 'linux'
      || window.process.platform == 'darwin') {
      return (
        <ul className="windowAction macActionButtons">
          {this.linux_close_button}
          {this.linux_minimize_button}
          {this.linux_maximize_button}
        </ul>
      )
    } else if (window.process.platform == 'win32') {
      return (
        <ul className="windowAction windowsActionButtons">
          <li className="windowAction_item" onClick={this.minimizeApp} id="minimizeApp">
            <i className="fa fa-minus"></i>
          </li>
          <li className="windowAction_item" onClick={this.maximizeApp} id="expandApp">
            <i className="fa fa-square-o"></i>
          </li>
          <li className="windowAction_item" onClick={this.closeApp} id="closeApp">
            <i className="fa fa-times"></i>
          </li>
        </ul>
      )
    }
  }
}

export default WindowActions;