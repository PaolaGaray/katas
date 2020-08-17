/*
https://www.codewars.com/kata/57ed4cef7b45ef8774000014
Instructions:
Every now and then people in the office moves teams or departments. Depending what people are doing 
with their time they can become more or less boring. Time to assess the current team.
You will be provided with an object(staff) containing the staff names as keys, and the department 
they work in as values.
Each department has a different boredom assessment score, as follows:
accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25
Depending on the cumulative score of the team, return the appropriate sentiment:
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

const score = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
}


//solution using reduce:

const boredom = (staff) => {
    let val = Object.keys(staff).reduce((acc, val) => acc + score[staff[val]], 0);
      
    if (val <= 80) return 'kill me now';
    if (val > 100) return 'party time!!';
    return 'i can handle this';
  }

//Test:
boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' })


  
//Another basic solution:

//   const boredom = (staff) => {
//     let boredomLevel = 0;
//     for (let person in staff) {
//         boredomLevel += score[staff[person]];
//     }
//     if (boredomLevel <= 80) return 'kill me now'
//     else if (boredomLevel > 80 && boredomLevel < 100) return 'i can handle this'
//     else return 'party time!!'
// }