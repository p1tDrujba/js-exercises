// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {return number > 0;});

// console.log( positiveArr ); // 1,2,3

const positiveSum = (arr) => result = arr.filter((number) => number > 0).reduce((sum, current) => {return sum + current;}, 0);

  
  console.log(positiveSum([1, -1, 2, -2, 3]));