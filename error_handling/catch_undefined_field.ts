const getObjectValue = (field, obj) => {
  try {
    if (!obj[field]) {
      throw new TypeError("Wrong field");
    }

    return obj[field];
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Catched error:", error.message);
    }
  }

  return;
};

const inputObject = {
  value: 5,
};

console.log(getObjectValue("key", inputObject));
console.log(getObjectValue("value", inputObject));
