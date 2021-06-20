// export const createDeck = () => {
export const createDeck = () => {
  const suitsText = {
    s: 'spades',
    h: 'hearts',
    d: 'diamonds',
    c: 'clubs',
  };
  const suitsAbbr = ['s', 'h', 'd', 'c'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck = [];
  for (const suit of suitsAbbr) {
    const suitText = suitsText[suit];
    const a = values.map(value => ({
      value,
      suit: suitText,
      card: value + suit,
    }));
    deck.push(...a);
  }
  return deck;
};

// export const shuffle = deck => {
export const shuffle = deck => {
  const newDeck = [];
  let deckLength = deck.length;

  // While there remain elements to shuffle…
  while (deckLength) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * deck.length);

    // If not already shuffled, move it to the new array.
    if (i in deck) {
      newDeck.push(deck[i]);
      delete deck[i];
      deckLength -= 1;
    }
  }

  return newDeck;
};

const factorial = number => {
  if (number === 1 || number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// A fast enumeration way is to track k index numbers of the elements selected,
// starting with {0 .. k−1} (zero-based) or {1 .. k} (one-based) as the first allowed k-combination
// and then repeatedly moving to the next allowed k-combination by incrementing the last index number
// if it is lower than n-1 (zero-based) or n (one-based) or the last index number x that is less
// than the index number following it minus one if such an index exists and resetting
// the index numbers after x to {x+1, x+2, …}.
export const enumeratingCombinations = (set, combinationLength) => {
  if (combinationLength > set.length || combinationLength <= 0) {
    return [];
  }
  // There is N 1-sized subsets in a N-sized set.
  if (combinationLength === 1) {
    const combinations = [];
    for (let i = 0; i < set.length; i++) {
      combinations.push([set[i]]);
    }
    return combinations;
  }
  if (combinationLength === set.length) {
    return [set];
  }
  const combinations = [];
  for (let i = 0; i < set.length - combinationLength + 1; i++) {
    const combinationHead = set.slice(i, i + 1);
    const combinationBody = enumeratingCombinations(set.slice(i + 1), combinationLength - 1);
    for (let j = 0; j < combinationBody.length; j++) {
      combinations.push(combinationHead.concat(combinationBody[j]));
    }
  }
  return combinations;
};
