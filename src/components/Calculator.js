/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.setState((state) => calculate(state, e.target.innerHTML));
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="calculator-container">
        <div className="row">
          <div className="display">
            <div className="input">{next || total || '0'}</div>
          </div>
        </div>
        <div className="row">
          <button type="button" onClick={this.onClickHandler} className="operation">AC</button>
          <button type="button" onClick={this.onClickHandler} className="operation">+/-</button>
          <button type="button" onClick={this.onClickHandler} className="operation">%</button>
          <button type="button" onClick={this.onClickHandler} className="operation right">÷</button>
        </div>
        <div className="row">
          <button type="button" onClick={this.onClickHandler} className="number">7</button>
          <button type="button" onClick={this.onClickHandler} className="number">8</button>
          <button type="button" onClick={this.onClickHandler} className="number">9</button>
          <button type="button" onClick={this.onClickHandler} className="operation right">x</button>
        </div>
        <div className="row">
          <button type="button" onClick={this.onClickHandler} className="number">4</button>
          <button type="button" onClick={this.onClickHandler} className="number">5</button>
          <button type="button" onClick={this.onClickHandler} className="number">6</button>
          <button type="button" onClick={this.onClickHandler} className="operation right">-</button>
        </div>
        <div className="row">
          <button type="button" onClick={this.onClickHandler} className="number">1</button>
          <button type="button" onClick={this.onClickHandler} className="number">2</button>
          <button type="button" onClick={this.onClickHandler} className="number">3</button>
          <button type="button" onClick={this.onClickHandler} className="operation right">+</button>
        </div>
        <div className="row bottom">
          <button type="button" onClick={this.onClickHandler} className="number zero">0</button>
          <button type="button" onClick={this.onClickHandler} className="operation">.</button>
          <button type="button" onClick={this.onClickHandler} className="operation right">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
