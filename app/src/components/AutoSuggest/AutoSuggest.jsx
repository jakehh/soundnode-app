import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './autosuggest.scss';

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

const helpers = {
  getMatchingLanguages (value) {
    const escapedValue = helpers.escapeRegexCharacters(value.trim());

    if (escapedValue === '') return [];

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
  },

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },

  randomDelay() {
    return 300 + Math.random() * 1000;
  },

  getSuggestionValue(suggestion) {
    return suggestion.name;
  },

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }

};


class AutoSuggest extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      value: '',
      suggestions: [],
      isLoading: false
    };

    this.cache = {
      [this.state.value]: this.state.suggestions
    };
  }

  loadSuggestions(value) {
    let that = this;
    const cacheKey = value.trim().toLowerCase();

    if (this.cache[cacheKey]) {
      that.setState({
        suggestions: this.cache[cacheKey]
      });
    } else {
      that.setState({
        isLoading: true
      });

      const suggestions = helpers.getMatchingLanguages(value);

      that.cache[cacheKey] = suggestions;

      that.setState({
        isLoading: false,
        suggestions
      });
    }
  }

  onChange (event, { newValue }) {
    this.setState({
      value: newValue
    });
    console.log(newValue)
  }

  onSuggestionsFetchRequested ({ value }) {
    this.loadSuggestions(value);
  }

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange.bind(this)
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
          getSuggestionValue={helpers.getSuggestionValue.bind(this)}
          renderSuggestion={helpers.renderSuggestion.bind(this)}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default AutoSuggest;
