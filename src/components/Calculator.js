import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Row from './Row';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick = (e) => {
      const result = calculate(this.state, e.target.value);
      this.setState((prev) => ({ ...prev, ...result }));
    }

    render() {
      const { next, total, operation } = this.state;
      return (
        <div className="calculator">
          <div className="cal-body">
            <div className="result">
              {!total && !operation && !next && 0 }
              { total && total }
              { operation && operation }
              { next && next }
            </div>
            <Row first="AC" second="+/-" third="%" fourth="÷" color="orange" handleClick={this.handleClick} />
            <Row first="7" second="8" third="9" fourth="x" color="orange" handleClick={this.handleClick} />
            <Row first="4" second="5" third="6" fourth="-" color="orange" handleClick={this.handleClick} />
            <Row first="1" second="2" third="3" fourth="+" color="orange" handleClick={this.handleClick} />
            <Row first="0" third="." fourth="=" color="orange" handleClick={this.handleClick} />
          </div>
        </div>
      );
    }
}

export default Calculator;
