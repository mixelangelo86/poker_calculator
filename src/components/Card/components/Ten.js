import React from 'react';

const Ten = () => {
  return (
    <div className="inner">
      <div className="column">
        <div className="symbol" />
        <div className="symbol" />
        <div className="symbol symbol_rotated" />
        <div className="symbol" />
      </div>
      <div className="column column_centered">
        <div className="symbol symbol_big" />
        <div className="symbol symbol_big" />
      </div>
      <div className="column">
        <div className="symbol" />
        <div className="symbol" />
        <div className="symbol symbol_rotated" />
        <div className="symbol" />
      </div>
    </div>
  );
};

export default Ten;
