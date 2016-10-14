import React, { PropTypes } from 'react';
import WindowActions from '../WindowActions/WindowActions';
import HistoryActions from '../HistoryActions/HistoryActions';
import Searchbar from '../Searchbar/Searchbar';
import AppInfo from '../AppInfo/AppInfo';
import './App.scss';

const App = (props) => (
  <section className="ui_app">
    <header className="topFrame">
      <WindowActions />
      <HistoryActions />
      <Searchbar />
      <AppInfo />
    </header>

    {props.children}
  </section>
);

App.propTypes = {
  children: PropTypes.node
};


export default App;
