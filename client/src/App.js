import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import SearchForm from './components/SearchForm/SearchForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchForm />
      </div>
    );
  }
}

export default App;
