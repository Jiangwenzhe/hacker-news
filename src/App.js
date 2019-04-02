import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  render() {
    return (
      <div className="App">
      xsa
      </div>
    );
  }
}

export default App;
