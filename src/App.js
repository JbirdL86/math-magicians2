/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
