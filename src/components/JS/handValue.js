import { cardToNumber, numberToHandValue } from './constants';

const sortCards = hand => {
  hand.sort((a, b) => {
    return cardToNumber[a] - cardToNumber[b];
  });
};

const prepareHand = hand => {
  const values = {};
  const suits = {};
  let hasFive = false;
  let hasTen = false;
  let hasAce = false;
  for (const card of hand) {
    const { value, suit } = card;
    values[value] = values[value] + 1 || 1;
    suits[suit] = suits[suit] + 1 || 1;
    hasFive = hasFive || +value === 5;
    hasTen = hasTen || +value === 10;
    hasAce = hasAce || +value === 14;
  }
  return {
    values,
    suits,
    hasFive,
    hasTen,
    hasAce,
  };
};

const areValueConsecutive = values => {
  let objectProperties = Object.keys(values);
  if (objectProperties.length !== 5) {
    return false;
  }
  for (const index of objectProperties.keys()) {
    const current = objectProperties[index];
    const next = objectProperties[index + 1];
    if (next && next - current !== 1) {
      return false;
    }
  }
  return true;
};

// works
const isStraight = (hasFive, hasTen, values) => {
  if (!hasFive && !hasTen) {
    return false;
  }
  return areValueConsecutive(values);
};

// works
const isFlush = suits => {
  return Object.values(suits).length === 1;
};

const isQuads = values => {
  if (Object.values(values).length !== 2) {
    return false;
  }
  for (const key of Object.keys(values)) {
    if (values[key] === 4) {
      return true;
    }
  }
  return false;
};

const isThreeOfAKind = values => {
  for (const key of Object.keys(values)) {
    if (values[key] === 3) {
      return true;
    }
  }
  return false;
};

const isTwoPairs = values => {
  let numberOfPairs = 0;
  for (const key of Object.keys(values)) {
    if (values[key] === 2) {
      numberOfPairs += 1;
    }
    if (numberOfPairs === 2) {
      return true;
    }
  }
  return false;
};

const isPair = values => {
  for (const key of Object.keys(values)) {
    if (values[key] === 2) {
      return true;
    }
  }
  return false;
};

export const handValue = hand => {
  const { values, suits, hasFive, hasTen, hasAce } = prepareHand(hand);
  const hasStraight = isStraight(hasFive, hasTen, values);
  const hasFlush = isFlush(suits);
  const hasQuads = isQuads(values);
  const hasThreeOfAKind = isThreeOfAKind(values);
  const hasTwoPairs = isTwoPairs(values);
  const hasPair = isPair(values);
  if (hasFlush && hasStraight && hasAce) {
    return 10;
  }
  if (hasFlush && hasStraight) {
    return 9;
  }
  if (hasQuads) {
    return 8;
  }
  if (hasThreeOfAKind && hasPair) {
    return 7;
  }
  if (hasFlush) {
    return 6;
  }
  if (hasStraight) {
    return 5;
  }
  if (hasThreeOfAKind) {
    return 4;
  }
  if (hasTwoPairs) {
    return 3;
  }
  if (hasPair) {
    return 2;
  }
  return 1;
};

const tieBreak = (hands) => {

}


export const calculateBestHand = combinations => {
  let bestHand = 1;
  for (const combination of combinations) {
    const value = handValue(combination);
    if (value > bestHand) {
      bestHand = value;
    }
  }
  return numberToHandValue[bestHand];
};
