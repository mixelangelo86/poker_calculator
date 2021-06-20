export const getCardsPerSuit = deck => {
  const cardsPerSuit = {
    spades: [],
    hearts: [],
    diamonds: [],
    clubs: [],
  };
  for (const card of deck) {
    cardsPerSuit[card.suit].push(card);
  }
  return cardsPerSuit;
};
