const { factorial, fibonacci, gcd } = require('./mathUtils');

function main() {
    console.log("Welcome to the Math Utils Application!");

    
    console.log('Factorial of 5: ${factorial(5)}');
    console.log('Factorial of 0: ${factorial(0)}');
    console.log('Factorial of -1 (should be undefined): ${factorial(-1)}');

   
    console.log('Fibonacci of 7: ${fibonacci(7)}');
    console.log('Fibonacci of 0: ${fibonacci(0)}');
    console.log('Fibonacci of 1: ${fibonacci(1)}');

    
    console.log('GCD of 48 and 18: ${gcd(48, 18)}');
    console.log('GCD of 101 and 103: ${gcd(101, 103)}');
}

main();