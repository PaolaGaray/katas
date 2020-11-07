/*
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
Instructions:
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

*/

const positiveSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i] > 0 ? sum = sum + arr[i] : sum = sum
    }
    return sum;
  }


 //Test Cases:
positiveSum([-1,2,3,4,-5]);
//9

//positiveSum([-1,-2,-3,-4,-5]);
//0