const getLastLetter = (message) => {
  if (typeof message !== "string")
    throw new Error("Wrong input parameter type. Required string");

  return message[message.length - 1];
};

console.log(getLastLetter("Hello"));
