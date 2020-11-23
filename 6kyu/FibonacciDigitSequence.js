/*  
https://www.codewars.com/kata/5bc555bb62a4cec849000047/train/javascript

Instructions:
You are given three non negative integers a, b and n, and making an infinite sequence just like fibonacci sequence, use the following rules:

step 1: use ab as the initial sequence.
step 2: calculate the sum of the last two digits of the sequence, and append it to the end of sequence.
repeat step 2 until you have enough digits
Your task is to complete the function which returns the nth digit (0-based) of the sequence.

*/

const find = (a,b,n) => {
    let fibArr = [a, b];
    let fibStr = a.toString() + b.toString();
    let arrHelper = [];
  
    let nextNumber = 0;
    for(let i = 0; i <= n; i++){
      nextNumber = fibArr[i] + fibArr[i+1];
      fibStr = fibStr + nextNumber.toString();
      if(nextNumber.toString().length > 1){
        arrHelper = nextNumber.toString().split('');
        fibArr.push(Number(arrHelper[0]));
        fibArr.push(Number(arrHelper[1]));
      } else {
        fibArr.push(nextNumber);
      }
      debugger;
    }
  }
  
  find(7,8,9)
  //5

