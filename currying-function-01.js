// Regular Function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Currying Function
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const addTwo = curriedAdd(2);
console.log(addTwo(3)); // 5
