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
    let return_value = '';
    if (image != null) {
      image.backgroundImage.split("assets/")[1].split(`")`)[0]
    }
    return return_value;
  }

  get linux_close_button () {
    let close_button = (
      <li className="windowAction_item" onClick={this.closeApp} id="closeApp">
        <i className="fa fa-times"></i>
      </li>
    );
    if (process.platform === 'linux') {
      let close_button_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_close);
      let close_button_hover_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_close_hover);
      let close_button_active_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_close_active);

      if (close_button_style === '') {
        close_button_style = `public/img/fallback-images/titlebutton-close-dark.png`;
      } else {
        close_button_style = `${this.props.linux_theme.theme.gtk_folder}assets/${close_button_style}`;
      }

      if (close_button_hover_style === '') {
        close_button_hover_style = `public/img/fallback-images/titlebutton-close-hover.png`;
      } else {
        close_button_hover_style = `${this.props.linux_theme.theme.gtk_folder}assets/${close_button_hover_style}`;
      }

      if (close_button_active_style === '') {
        close_button_active_style = `public/img/fallback-images/titlebutton-close-active.png`;
      } else {
        close_button_active_style = `${this.props.linux_theme.theme.gtk_folder}assets/${close_button_active_style}`;
      }

      const linux_close = css`
        cursor: initial !important;
        background: url(${close_button_style}) !important;
        width: 18px !important;
        height: 18px !important;
        margin-top: 8px !important;
        background-size: cover !important;

        &:hover {
          background: url(${close_button_hover_style}) !important;
          background-size: cover !important;
        }

        &:active {
          background: url(${close_button_active_style}) !important;
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
      <li className="windowAction_item" onClick={this.minimizeApp} id="minimizeApp">
        <i className="fa fa-times"></i>
      </li>
    );
    if (process.platform === 'linux') {
      let minimize_button_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_minimize);
      let minimize_button_hover_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_minimize_hover);
      let minimize_button_active_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_minimize_active);

      if (minimize_button_style === '') {
        minimize_button_style = `public/img/fallback-images/titlebutton-minimize-dark.png`;
      } else {
        minimize_button_style = `${this.props.linux_theme.theme.gtk_folder}assets/${minimize_button_style}`;
      }

      if (minimize_button_hover_style === '') {
        minimize_button_hover_style = `public/img/fallback-images/titlebutton-minimize-hover.png`;
      } else {
        minimize_button_hover_style = `${this.props.linux_theme.theme.gtk_folder}assets/${minimize_button_hover_style}`;
      }

      if (minimize_button_active_style === '') {
        minimize_button_active_style = `public/img/fallback-images/titlebutton-minimize-active.png`;
      } else {
        minimize_button_active_style = `${this.props.linux_theme.theme.gtk_folder}assets/${minimize_button_active_style}`;
      }

      const linux_close = css`
        cursor: initial !important;
        background: url(${minimize_button_style}) !important;
        width: 18px !important;
        height: 18px !important;
        margin-top: 8px !important;
        background-size: cover !important;

        &:hover {
          background: url(${minimize_button_hover_style}) !important;
          background-size: cover !important;
        }

        &:active {
          background: url(${minimize_button_active_style}) !important;
          background-size: cover !important;
        }
      `
      close_button = (
        <li className={`${linux_close} windowAction_item`} onClick={this.minimizeApp} id="minimizeApp"></li>
      );
    }

    return close_button;
  }

  get linux_maximize_button () {
    let close_button = (
      <li className="windowAction_item" onClick={this.maximizeApp} id="expandApp">
          <i className="fa fa-plus"></i>
        </li>
    );
    if (process.platform === 'linux') {
      let maximize_button_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_maximize);
      let maximize_button_hover_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_maximize_hover);
      let maximize_button_active_style = this.get_linux_asset_image(this.props.linux_theme.css.titlebar_button_titlebutton_maximize_active);

      if (maximize_button_style === '') {
        maximize_button_style = `public/img/fallback-images/titlebutton-maximize-dark.png`;
      } else {
        maximize_button_style = `${this.props.linux_theme.theme.gtk_folder}assets/${maximize_button_style}`;
      }

      if (maximize_button_hover_style === '') {
        maximize_button_hover_style = `public/img/fallback-images/titlebutton-maximize-hover.png`;
      } else {
        maximize_button_hover_style = `${this.props.linux_theme.theme.gtk_folder}assets/${maximize_button_hover_style}`;
      }

      if (maximize_button_active_style === '') {
        maximize_button_active_style = `public/img/fallback-images/titlebutton-maximize-active.png`;
      } else {
        maximize_button_active_style = `${this.props.linux_theme.theme.gtk_folder}assets/${maximize_button_active_style}`;
      }

      const linux_close = css`
        cursor: initial !important;
        background: url(/img/fallback-images/titlebutton-maximize-dark.png) !important;
        background: url(${maximize_button_style}) !important;
        width: 18px !important;
        height: 18px !important;
        margin-top: 8px !important;
        background-size: cover !important;

        &:hover {
          background: url(/img/fallback-images/titlebutton-maximize-dark-hover.png) !important;
          background: url(${maximize_button_hover_style}) !important;
          background-size: cover !important;
        }

        &:active {
          background: url(/img/fallback-images/titlebutton-maximize-dark-active.png) !important;
          background: url(${maximize_button_active_style}) !important;
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