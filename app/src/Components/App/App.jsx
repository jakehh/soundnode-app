import React, { PropTypes } from 'react';
import WindowActions from '../WindowActions/WindowActions';
import HistoryActions from '../HistoryActions/HistoryActions';
import Searchbar from '../Searchbar/Searchbar';
import AppUpdate from '../AppUpdate/AppUpdate';
import SettingsDropdown from '../SettingsDropdown/SettingsDropdown';
import './App.scss';

const App = (props) => (
  <section className="ui_app">
    <header className="topFrame">
      <WindowActions />
      <HistoryActions />
      <Searchbar />
      <ul className="appInfo">
        <SettingsDropdown />
        <AppUpdate />
      </ul>
    </header>

    {props.children}
  </section>
);

App.propTypes = {
  children: PropTypes.node
};


export default App;
