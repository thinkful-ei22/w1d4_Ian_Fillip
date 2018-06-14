'use strict';

$(function() {
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    let answer = 







  })
});
  



function fizzBuzz(countTo) {
  // create an empty array that will
  // contain our results
  const result = [];
  // count from 1 to `countTo`, and for
  // each number, add the number or its
  // substitution (fizz, buzz, fizzbuzz)
  // to the result array.
  for (let i = 1; i <= countTo; i++) {
    if (i % 15 === 0) {
      result.push('fizzbuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}