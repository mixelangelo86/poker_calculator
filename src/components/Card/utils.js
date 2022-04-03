import { symbolPosition, maximumCardGrids } from './constants';

const hasSymbol = (value, index) => symbolPosition[value].includes(index);

const getCardGrid = (suit, value) => {
  const gridItems = [];
  for (let index = 0; index < maximumCardGrids; index++) {
    gridItems.push({
      suit: hasSymbol(value, index) ? suit : '',
      value: index === 0 || index === maximumCardGrids - 1 ? value : '',
      rotated: index > 15 ? 'rotated' : '',
    });
  }
  return gridItems;
};

export { getCardGrid };
