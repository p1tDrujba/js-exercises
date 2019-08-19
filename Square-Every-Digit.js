// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
// let needDeget = 919;



function squareDigits(num){
    let arr = String(num).split('');
  
    let newArray = arr.map(function(item) {
        return String(+item * +item)
    })

    return +(newArray.join(''))

}

console.log(squareDigits(313))

// Такая же функция, но записана более злоебуче:

function digitArr(numbers) {
    
    return +(((String(numbers).split('')).map((item) => {return String(+item * +item)})).join(''))

}

console.log(digitArr(919))

