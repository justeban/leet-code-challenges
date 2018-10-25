'use strict';

// Modifying Array in Place
// Using no methods
// Leaves end of Array containing extra characters
// BIG O => time o(n), space o(1)
// time - we are going to iterate through the entire array of n size
// space - we are modifying the array in place so we are not creating a new array
var exports = module.exports = {};

exports.removeDups = arr => {
  
  if (!arr || !(arr instanceof Array)) { throw 'invalid input'; }
  
  function isSorted (arr) {
    for (let i = 0; i < arr.length; i++) {
      if ( !(arr[i] <= arr[i + 1])) {
        return arr.sort();
      }
    }
    return arr;
  }
  arr = isSorted(arr);

  let currIdx = 0;
  let currItem = arr[0];

  arr.forEach(item => {
    if (item !== currItem) {
      currIdx++;
      currItem = item;
      arr[currIdx] = currItem;
    }
  });

  return currIdx + 1;
};

// Using Splice
// BIG O => time o(n), space o(1)
// time - this ignoring the work that splice is doing behind the scenes
// --- we can 
exports.removeDups2 = arr => {
  for (let i = 0; i < arr.length;  i++) {
    if ( arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return length;
};

// Using a Set
// Set is a built in structure that does not accept duplicates
// BIG O => time o(n), space o(n)

// time - our set.add needs to be considered in our time complexity
// // Each time calling add(), Set needs to check through all members to make sure no duplicate before continuing. 
// // Generally add() will take O(n) running time. 
// // However, thanks to hash table implementation approach, add() in Set will likely take only O(1).
// // https://medium.com/front-end-hacking/es6-set-vs-array-what-and-when-efc055655e1a

// space - we are create an entire new structure that is of n size

exports.removeDups3 = arr => {
  let set = new Set();
  arr.forEach(item => set.add(item));
  return set.size;
};

// Using filter
// Big o => time o(n), space o(1)
// creates new array, but also removes the extra characters
exports.removeDups4 = arr => {
  return arr.filter((item, i) => item !== arr[i + 1]).length;
};