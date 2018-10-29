'use strict';


module.exports = exports = {};

exports.climbingStairs = function(n) {

  if ( typeof(n) !== 'number') { throw 'NaN'; }

  let totalSteps = [];

  let _climbingStairs = (n, i = 0, steps = []) => {
    if ( i > n ) { 
      return;
    } else if ( i === n ) { 
      totalSteps.push(steps.reduce((acc, cv, i) => i ===  0 ? acc + cv : acc + ' + ' + cv, ''));
    } else {
      _climbingStairs(n, i + 2, [...steps, '2 Steps']);
      _climbingStairs(n, i + 1, [...steps, '1 step']);
    }
  };

  _climbingStairs(n);

  return totalSteps;
};