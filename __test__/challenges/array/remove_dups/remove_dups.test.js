'use strict';

const removeDups = require('../../../../challenges/array/remove_dups/remove_dups.js');


describe('removeDups()', () => {
  
  it('if given an empty argument, should throw', () => {
    expect(() => removeDups.removeDups()).toThrow();
  });
  
  it('if given input other than an array, expect to throw', () => {
    expect(() => removeDups.removeDups('hello')).toThrow();
    expect(() => removeDups.removeDups(1234)).toThrow();
  });

  it('if input array is not sorted expect to handle the sort and return proper output', () => {
    expect(removeDups.removeDups([2,1,5,3,7,5])).toBe(5);
  });

  it('expect to modify array in place, so array length before should equal the length after as well', () => {
    let x = [1,2,2,2,3,3,3,4,4,4,5,5,5];
    let length = x.length;
    removeDups.removeDups(x);
    expect(x.length).toEqual(length);
  });

  it('expect to return length of sorted numbers', () => {
    let x = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
    expect(removeDups.removeDups(x)).toBe(5);
    x = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5,7,7,7,8,8,8,8,9,9,9,9];
    expect (removeDups.removeDups(x)).toBe(8);
  });

  it('expect numbers up to the return length to be sorted', () => {
    let x = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9];
    let length = removeDups.removeDups(x);
    let array = x.splice(0,length);
    expect(array).toEqual(array.sort());
  });
});

describe('removeDups2()', () => {
  
  it('if input is not an array expect to throw an error', () => {
    expect(() => removeDups.removeDups2()).toThrow();
    expect(() => removeDups.removeDups2({})).toThrow();
    expect(() => removeDups.removeDups2('hello')).toThrow();
    expect(() => removeDups.removeDups2(1234)).toThrow();
  });

  it('expect to modify existing array, length after as well is going to be result of a filtered array', () => {
    let x = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
    let length = x.length;
    removeDups.removeDups2(x);
    expect(length > x.length).toBeTruthy();
  });
}); 

describe('removeDups3()', () => {
  it('if input is not an array expect to throw an error', () => {
    expect(() => removeDups.removeDups3()).toThrow();
    expect(() => removeDups.removeDups3({})).toThrow();
    expect(() => removeDups.removeDups3('hello')).toThrow();
    expect(() => removeDups.removeDups3(1234)).toThrow();
  });
  it('method uses a set, expect original array to be unmodified but return value to be a set', () => {
    let x = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
    let xStr = x.join('');
    let set = removeDups.removeDups3(x);
    expect(set instanceof Set).toBeTruthy();
    expect(x.join('') === xStr).toBeTruthy();
  });
});
describe('removeDups4()', () => {
  it('if input is not an array expect to throw an error', () => {
    expect(() => removeDups.removeDups4()).toThrow();
    expect(() => removeDups.removeDups4({})).toThrow();
    expect(() => removeDups.removeDups4('hello')).toThrow();
    expect(() => removeDups.removeDups4(1234)).toThrow();
  });
  it('expect input array to be unmodified and return value to be the new array\'s length', () => {
    let x = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
    let xStr = JSON.stringify(x);
    let nonDups = removeDups.removeDups4(x);
    expect(JSON.stringify(x) === xStr).toBeTruthy();
    expect(nonDups === 5).toBeTruthy();
  });
});