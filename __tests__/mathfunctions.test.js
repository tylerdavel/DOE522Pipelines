const { factorial, fibonacci, power, gcd } = require("../src/mathfunctions");

describe("Math Functions", () => {
  test("factorial of 5 should be 120", () => {
    expect(factorial(5)).toBe(120);
  });

  test("fibonacci of 7 should be 13", () => {
    expect(fibonacci(7)).toBe(13);
  });

  test("2 raised to the power of 10 should be 1024", () => {
    expect(power(2, 10)).toBe(1024);
  });

  test("gcd of 48 and 18 should be 6", () => {
    expect(gcd(48, 18)).toBe(6);
  });
});