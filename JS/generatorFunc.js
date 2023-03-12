/// I see the generator functions as 
/// synchronous threads of execution.

// yield is the return of the function
// when it returns(yield), the function stops
// will continue at the same point where you left, when call .next()

// generator function
const fibonacci = function* (n) {
    // first execution
    yield   0;
    // second execution
    yield   1;

    let prev = 0;
    let curr = 1;

    // at this point we can calculate the next value
    while (true) {
        // fibo will be de previus value + the current value
        const next = prev + curr;
        // "return"
        yield next;
        // actualize the values
        prev = curr;
        curr = next;
    }
}

const fib = fibonacci(10);
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8

// fibonacci e.g.
// 0 1
// 0 1 (0+1)
// 0 1 1 (1+1)
// 0 1 1 2 (1+2)
// 0 1 1 2 3 (2+3)
// 0 1 1 2 3 5 (3+5)
// 0 1 1 2 3 5 8 (5+8)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*