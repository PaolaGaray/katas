/*
https://www.codewars.com/kata/total-amount-of-points
Instructions:
Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection.
For example: ["3:1", "2:2", "0:1", ...]
Write a function that takes such collection and counts the points of our team in the championship. 
Rules for counting points for each match:
if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/
const points = (games) => {
    let counter = 0;
    games.forEach( game => {
      let x = parseInt(game.charAt(0));
      let y = parseInt(game.charAt(2));
          if(x > y) counter+=3
             else if (x === y) counter+=1
          })
    return(counter);
  }