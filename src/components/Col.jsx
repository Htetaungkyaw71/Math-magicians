/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';

class Col extends PureComponent {
  render() {
    const {
      // eslint-disable-next-line react/prop-types
      name, click, color, wide,
    } = this.props;
    return (
      // eslint-disable-next-line react/button-has-type
      <button value={name} onClick={click} className={`cal-col ${color && color} ${wide && wide}`}>
        {name}
      </button>
    );
  }
}

export default Col;
