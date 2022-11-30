/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Col from './Col'

export default class Row extends Component {
  render() {
    return (
      <div className='cal-row'>
            <Col name={this.props.first} wide={this.props.first === "0" &&"two-column"} click={this.props.handleClick}/>
            {this.props.second && <Col name={this.props.second} click={this.props.handleClick}/> }
            <Col name={this.props.third} click={this.props.handleClick}/>
            <Col name={this.props.fourth} color={this.props.color} click={this.props.handleClick}/>
      </div>
    )
  }
}
