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
  
}); 