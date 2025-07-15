// Counter App
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

const counter1 = createCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2

const counter2 = createCounter();
console.log(counter2.increment()); // 1 (different counter1)

console.log(counter1.count); 
// undefined -> count is variable with function scope, 
// can not access from global scope

