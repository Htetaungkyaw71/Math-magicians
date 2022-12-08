/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Col from './Col';

export default class Row extends Component {
  render() {
    const {
      first, second, third, fourth, color, handleClick,
    } = this.props;
    return (
      <div className="cal-row">
        <Col name={first} wide={first === '0' && 'two-column'} click={handleClick} />
        {second && <Col name={second} click={handleClick} />}
        <Col name={third} click={handleClick} />
        <Col name={fourth} color={color} click={handleClick} />
      </div>
    );
  }
}
