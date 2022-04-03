export const checkIsCardSelected = (deck, position) => {
  let card = null;
  deck.forEach(item => {
    if (item.position === position) {
      card = item;
    }
  });
  return card;
};
