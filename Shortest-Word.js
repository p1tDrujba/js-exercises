// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const jopa =  (string) => Math.min(...string.split(' ').map((name) => name.length));

console.log(jopa("Example tests"))


