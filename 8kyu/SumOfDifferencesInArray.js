/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
Instructions:
Your task is to sum the differences between consecutive pairs in the array in descending order.
For example: sumOfDifferences([2, 1, 10]) Returns 9
Descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
*/

const sumOfDifferences = (arr) => {
    const descendingArr = arr.sort((a, b) => b - a);
    let sum = 0
    for (let i = 0; i < descendingArr.length - 1; i++){
      sum = sum + descendingArr[i] - descendingArr[i+1]
    }
    return sum;
  }
