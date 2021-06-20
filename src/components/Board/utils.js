export const getCards = (deck, numberOfCards) => {
  const cards = [];
  for (let i = 0; i < numberOfCards; i++) {
    cards.push(deck.pop());
  }
  return cards;
};

export const getPlayers = cards => {
  const players = [];
  let currentPlayer = [];
  for (const key of cards.keys()) {
    currentPlayer.push(cards[key]);
    if (currentPlayer.length === 2) {
      players.push({ [key + 1 / 2]: currentPlayer });
      currentPlayer = [];
    }
  }
  return players;
};
