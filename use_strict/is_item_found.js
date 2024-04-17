"use strict";

const ERROR_MESSAGES = {
  WRONG_ARGUMENTS: "Wrong arguments",
};
const INPUT_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EXISTING_ITEM = 5;
const NON_EXISTING_ITEM = -1;

const isItemFound = (items, searchingItem) => {
  if (!(items instanceof Array))
    throw new Error(ERROR_MESSAGES.WRONG_ARGUMENTS);

  const isItemFound = items.includes(searchingItem);

  return isItemFound;
};

console.log(isItemFound({}, EXISTING_ITEM)); // error
console.log(isItemFound(INPUT_DATA, EXISTING_ITEM)); // true
console.log(isItemFound(INPUT_DATA, NON_EXISTING_ITEM)); // false
