import React from "react";
import ReactDOM from "react-dom";

import HeaderActions from "./header/headerActions";
import SettingsButton from "./header/settingsButton";
let linux_theme = null;

// While migration is happening
// for every component group
// we will need to render them separately
// once a group is done e.g every component in header
// should combined into one component composing all header
// components

if (process.platform === "linux") {
    const { theme } = require('@jakejarrett/gtk-theme');
    const nativeCSS = require('native-css');
    const converted = nativeCSS.convert(theme.css);
    linux_theme = {
        theme: theme,
        css: converted
    }
}

ReactDOM.render(
    <HeaderActions linux_theme={linux_theme} />,
    document.querySelector(".headerActionsApp")
);

ReactDOM.render(
    <SettingsButton />,
    document.querySelector(".settingsApp")
);