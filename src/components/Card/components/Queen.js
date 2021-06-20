import React from 'react';
import { QueenSvg } from './svg';
import { suitToHex } from './constants';

const Queen = ({ suit }) => {
  const color = suitToHex[suit];
  return <QueenSvg fill={color} />;
};

export default Queen;
