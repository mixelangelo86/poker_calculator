export const checkIsCardSelected = (deck, index) => {
  let card = null;
  deck.forEach(item => {
    if (item.cardPositionIndex === index) {
      card = item;
    }
  });
  return card;
};
