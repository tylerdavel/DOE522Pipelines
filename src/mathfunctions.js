function factorial(n) {
    if (n < 0) return undefined;
    return n === 0 ? 1 : n * factorial(n - 1);
}


function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
  }

module.exports = { factorial, fibonacci, gcd, power };