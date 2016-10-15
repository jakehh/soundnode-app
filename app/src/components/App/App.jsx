import React, { PropTypes } from 'react';
import WindowActions from '../WindowActions/WindowActions';
import HistoryActions from '../HistoryActions/HistoryActions';
import Searchbar from '../Searchbar/Searchbar';
import AppUpdate from '../AppUpdate/AppUpdate';
import SettingsDropdown from '../SettingsDropdown/SettingsDropdown';
import User from '../User/User';
import Player from '../Player/Player';
import { createStore } from 'redux'
import './App.scss';

// const store = createStore(counter)

const App = (props) => (
  <div className="ui_app">
    <header className="topFrame">
      <WindowActions />
      <HistoryActions />
      <Searchbar />
      <ul className="appInfo">
        <SettingsDropdown />
        <AppUpdate />
      </ul>
    </header>
    <aside className="aside">
      <header className="header">
        <User />
      </header>

      <Player />

    </aside>

    <div className="mainView">{props.children}</div>
  </div>
);

App.propTypes = {
  children: PropTypes.node
};


export default App;
