import React from 'react';
import { calculateBestHand } from '../../JS/handValue';
import { enumeratingCombinations } from '../../JS/logic';

const Value = ({ cards, communityCards }) => {
  const allPossibleCombinations = enumeratingCombinations(cards.concat(communityCards), 5);
  const bestPossibleValue = calculateBestHand(allPossibleCombinations);
  return <>{bestPossibleValue}</>;
};

export default Value;
