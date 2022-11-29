/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="cal-body">
          <div className="result">
            0
          </div>
          <div className="cal-row">
            <div className="cal-col">
              AC
            </div>
            <div className="cal-col">
              +/-
            </div>
            <div className="cal-col">
              %
            </div>
            <div className="cal-col orange">
              /
            </div>
          </div>
          <div className="cal-row">
            <div className="cal-col">
              7
            </div>
            <div className="cal-col">
              8
            </div>
            <div className="cal-col">
              9
            </div>
            <div className="cal-col orange">
              x
            </div>
          </div>
          <div className="cal-row">
            <div className="cal-col">
              4
            </div>
            <div className="cal-col">
              5
            </div>
            <div className="cal-col">
              6
            </div>
            <div className="cal-col orange">
              -
            </div>
          </div>
          <div className="cal-row">
            <div className="cal-col">
              1
            </div>
            <div className="cal-col">
              2
            </div>
            <div className="cal-col">
              3
            </div>
            <div className="cal-col orange">
              +
            </div>
          </div>
          <div className="cal-row">
            <div className="cal-col two-column">
              0
            </div>
            <div className="cal-col">
              .
            </div>
            <div className="cal-col orange">
              =
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;
