// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

let str = 'world';
let emptyArr = [];

for ( i = 0; i < str.length; i++) {
    emptyArr.unshift(str[i])
}

console.log(emptyArr.join(''));