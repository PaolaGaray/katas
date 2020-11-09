/*  
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript

Instructions:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/


const descendingOrder = (n) => {
    let nArr = n.toString().split('').map(Number);
    let nArrLength = nArr.length;
    let maxNum  = 0;
    let i = 0;
    let nMaxNum = [];
    
    while(nArrLength > 0) { 
       maxNum = Math.max(...nArr);
       i = nArr.indexOf(maxNum);
       nMaxNum.push(maxNum);
       nArr.splice(i, 1);
       nArrLength--;
    }
    return parseInt(nMaxNum.join(''));
  }
  

  //Test Data
  descendingOrder(42145);


  //Other solutions

//   const descendingOrder = (n) => {
//     return Number(String(n).split('').sort().reverse().join(''))
//   }
