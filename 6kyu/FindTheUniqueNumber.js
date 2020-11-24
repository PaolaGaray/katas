/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript
Instructions:
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

const findUniq = (arr) => {
    let arrMap = {};
    for (let number of arr) {
      arrMap[number] = arrMap[number] + 1 || 1;
    };
    for(let [key, value] of Object.entries(arrMap)){
      if(value == 1){
        return +key
      }
    }
  }
  
  
  //findUniq([ 0, 1, 0 ])
  //1
  
  //findUniq([ 1, 1, 1, 2, 1, 1 ])
  // 2
  
  findUniq([ 3, 10, 3, 3, 3 ])
  // 10