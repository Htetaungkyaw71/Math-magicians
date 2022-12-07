/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

export class Col extends Component {
  render() {
    return (
            <button value={this.props.name} onClick={this.props.click} className={`cal-col ${this.props.color && this.props.color} ${this.props.wide && this.props.wide}`} >
                {this.props.name}
            </button>
    )
  }

}

export default Col