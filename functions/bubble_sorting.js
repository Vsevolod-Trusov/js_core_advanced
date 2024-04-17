const getBubbleSortedArray = (data) => {
  if (!(data instanceof Array))
    throw new Error("Wrong input type. Required array");

  for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  return data;
};

console.log(getBubbleSortedArray([3, 2, 1]));
console.log(getBubbleSortedArray([5, 4, 3, 2, 1]));
