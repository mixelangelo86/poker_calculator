import React, { useEffect, useContext } from 'react';
import ModalContext from '../../Modal/ModalContext';
import { calculateBestHand } from '../../JS/handValue';
import { enumeratingCombinations } from '../../JS/logic';
import Title from '../../Title';

const Value = () => {
  const { deck, selectedPositions } = useContext(ModalContext);
  const value = '0.0%';
  // console.log(deck);
  // console.log(selectedPositions);
  // if (selectedPositions.length >= 4) {
  // const cards = [selectedPositions[1], selectedPositions[2]];
  // const allPossibleCombinations = enumeratingCombinations(deck, 5);
  // console.log(allPossibleCombinations);
  // }

  // console.log(selectedPositions);
  // if (selectedPositions[firstCardIndex] && selectedPositions[secondCardIndex]) {
  //   console.log(selectedPositions[firstCardIndex]);
  //   console.log(selectedPositions[secondCardIndex]);
  // }
  // const allPossibleCombinations = enumeratingCombinations(cards.concat(communityCards), 5);
  // const bestPossibleValue = calculateBestHand(allPossibleCombinations);
  return <div className="value">{value}</div>;
};

export default Value;
