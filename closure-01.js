function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log("Counter: ", counter);
    }

    return inner;
}

const fn = outer(); // outer() run and return inner function
fn(); // Counter: 1
fn(); // Counter: 2
fn(); // Counter: 3

