const ZERO = 0;
const HALF = 2;

const getHalfPart = (numbers) => {
  if (!(numbers instanceof Array))
    throw new Error("Wrong input type. Required array");

  const lastIndex = Math.floor(numbers.length / HALF);

  return numbers
    .slice(ZERO, lastIndex)
    .reduce((sum, current) => sum + current, ZERO);
};

console.log(getHalfPart([1, 2, 3, 4]));
console.log(getHalfPart([1, 2, 3]));
