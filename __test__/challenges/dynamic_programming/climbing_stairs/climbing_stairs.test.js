'use strict';

const s = require('../../../../challenges/dynamic_programming/climbing_stairs/climbing_stairs.js');

function fibonacci(n, first = 0, sec = 1) {
  if (n === 0) return 0;
  if (n === 1) return sec;

  let num = first + sec;
  return fibonacci(n - 1, sec, num);
}

describe('climbingStairs(n)', () => {
  it ('if n is not a number then expect to throw error', () => {
    expect(() => s.climbingStairs()).toThrow();
    expect(() => s.climbingStairs('')).toThrow();
    expect(() => s.climbingStairs([])).toThrow();
    expect(() => s.climbingStairs({})).toThrow();
  });
  it ('expect return value to be an instance of an array', () => {
    let steps = s.climbingStairs(1);
    expect(steps).toBeInstanceOf(Array);
  });
  it ('expect amount of steps to be equal to fibonacci of n', ()  => {
    let n = 1;
    let fib = fibonacci(n+1);
    let steps = s.climbingStairs(n);
    expect(steps.length).toBe(fib); 
    n = 2;
    fib = fibonacci(n+1);
    steps = s.climbingStairs(n);
    expect(steps.length).toBe(fib); 
    n = 3;
    fib = fibonacci(n+1);
    steps = s.climbingStairs(n);
    expect(steps.length).toBe(fib); 
    n = 4;
    fib = fibonacci(n+1);
    steps = s.climbingStairs(n);
    expect(steps.length).toBe(fib); 
    n = 10;
    fib = fibonacci(n+1);
    steps = s.climbingStairs(n);
    expect(steps.length).toBe(fib); 
    n = 15;
    fib = fibonacci(n + 1);
    steps = s.climbingStairs(n);
    expect(steps.length).toBe(fib); 
  });
});

