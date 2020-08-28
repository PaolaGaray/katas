/*
https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
Instructions:
Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.
Return as a number.
*/

const divCon = (x) => {
    let numbers = [];
    let chars = [];
    for (let i=0; i<x.length; i++)
      typeof x[i] == "number" ? numbers.push(x[i]) : chars.push(parseInt(x[i]))
    let a = numbers.reduce((acc, val) =>  { return acc + val},0);
    let b = chars.reduce((acc, val) => { return acc + val},0)
    return a - b
  }
  
  //Test:
  //divCon([9, 3, '7', '3'])
  //2
  //divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])
  //14
  //divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])
  //13

  //Another cool solution:
//   function divCon(x){
//     return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
//   }