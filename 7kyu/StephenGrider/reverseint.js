// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
    if (n >= 0) {
      return Number(String(n).split('').reverse().join(''));
    } else {
       n = n * (-1);
       return Number(String(n).split('').reverse().join('')) * (-1); 
    }  
  }

  reverseInt(8956423)