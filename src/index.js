// change the function to return the sum if a > b, or the difference otherwise

const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    debugger;
    return "Bad Input";
  }

  if (a < b) {
    return b - a;
  }

  return a + b;
};

//write a function that raises a number to the third powers

export const cube = (num) => {
  if (typeof num === "string") {
    return "bad input";
  }
  return num ** 3;
};

const mathService = {
  sum: sum,
  cube: cube,
};

export default mathService;
