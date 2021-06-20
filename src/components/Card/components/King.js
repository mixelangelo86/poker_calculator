import React from 'react';
import { KingSvg } from './svg';
import { suitToHex } from './constants';

const King = ({ suit }) => {
  const color = suitToHex[suit];
  return <KingSvg fill={color} />;
};

export default King;
