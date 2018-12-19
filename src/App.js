import React, { Component } from 'react';
import WeatherHeader from './WeatherHeader/WeatherHeader'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherHeader />
      </div>
    );
  }
}

export default App;
