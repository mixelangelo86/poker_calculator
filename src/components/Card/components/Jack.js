import React from 'react';
import { JackSvg } from './svg';
import { suitToHex } from './constants';

const Jack = ({ suit }) => {
  const color = suitToHex[suit];
  return <JackSvg fill={color} />;
};

export default Jack;
