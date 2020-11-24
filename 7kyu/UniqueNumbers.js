/*
https://www.codewars.com/kata/568f9bd9cbe89334c900000c/javascript
Instructions:
You have to write a function uniqueNumbers which returns unique numbers array. You don't need to validate input arg arr. Retain the original order of the input.
Examples:
uniqueNumbers([1,1,2,2]) => [1,2]
uniqueNumbers([1,2,3,1]) => [1,2,3]
*/

const uniqueNumbers = (numbersArray) => {
    let result = []
    numbersArray.forEach((item) => {
      if(result.indexOf(item) < 0 ){
        result.push(item);
      }
    });
    return result
  }
  
  
  
  //Test Cases
  uniqueNumbers([1,1,2,2])
  //[1,2]
  
  //uniqueNumbers([1,2,3,1])
  // [1,2,3] 