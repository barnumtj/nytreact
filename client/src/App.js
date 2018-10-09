import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import SearchForm from './components/SearchForm/SearchForm'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchForm
         handleFormSubmit={this.handleFormSubmit}
         handleTopicChange={this.handleTopicChange}
         handleStartYearChange={this.handleStartYearChange}
         handleEndYearChange={this.handleEndYearChange}
         onClick={this.handleSaveButton}
         />
        
      </div>
    );
  }
}

export default App;
