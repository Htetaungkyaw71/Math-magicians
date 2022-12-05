import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Row from './Row';

const Calculator = () => {
  const [objstate, setObjstate] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(objstate, e.target.value);
    setObjstate((prev) => ({ ...prev, ...result }));
  };

  const { next, total, operation } = objstate;
  return (
    <div className="calculator">
      <div className="cal-body">
        <h1>Let&apos;s do some math!</h1>
        <div className="result">
          {!total && !operation && !next && 0 }
          { total && total }
          { operation && operation }
          { next && next }
        </div>
        <Row first="AC" second="+/-" third="%" fourth="÷" color="orange" handleClick={handleClick} />
        <Row first="7" second="8" third="9" fourth="x" color="orange" handleClick={handleClick} />
        <Row first="4" second="5" third="6" fourth="-" color="orange" handleClick={handleClick} />
        <Row first="1" second="2" third="3" fourth="+" color="orange" handleClick={handleClick} />
        <Row first="0" third="." fourth="=" color="orange" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
