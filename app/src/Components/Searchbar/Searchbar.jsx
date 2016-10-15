import React, { Component } from 'react';
import AutoSuggest from '../AutoSuggest/AutoSuggest';
import './searchbar.scss';

/**
 * This returns the History Actions component and its dependencies.
 */
class Searchbar extends Component {

  /**
   * When the component is added, add our event listeners.
   */
  componentDidMount () {
    /**
     * Event listeners to add
     *    typeahead(keyword)
     *    refocusTypehead(keyword)
     *    blurTypeahead()
     *    onSubmit(keyword)
     */
  }

  /**
   * When the component is being destroyed, kill our event listeners.
   */
  componentWillUnmount () {}


  render () {
    return (
      <ul className="topbarSearch">
        <div className="search">
          <form className="search-form">
            <input type="search" placeholder="Search" id="search" className="search_field"></input>
            <i className="fa fa-search search-icon"></i>
            <input type="submit" id="submit" value="Submit" className="searchButton"></input>
          </form>
          <div className="dropdown" id="searchDropDown"></div>
        </div>
        <AutoSuggest />
      </ul>
    )
  }
}

export default Searchbar;
