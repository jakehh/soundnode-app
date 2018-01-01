import React, { Component } from "react";
import BackForwardActions from "./backForwardButtons";
import WindowActions from "./windowActions";

class HeaderActions extends Component {
  constructor (...props) {
    super(...props);

    console.log(this.props.linux_theme)
  }
  render() {
    return (
      <div>
        <WindowActions linux_theme={this.props.linux_theme} />
        <BackForwardActions />
      </div>
    )
  }
}

export default HeaderActions;
