/*
https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript
Instructions:
Given a string, remove any characters that are unique from the string.

Example:
input: "abccdefee"
output: "cceee"

*/

function onlyDuplicates(str) {
    //iterate through the str, creating a new object
    let strMap = {}
    for(let char of str) {
      if(!strMap[char]) strMap[char] = 1;
       else strMap[char]++
    }
    //iterate through the object created in order to identify characteres that are unique
    
    let uniqueChars = [];
    for(let char in strMap){
      if(strMap[char] == 1) {
        uniqueChars.push(char);
      }
    }
    const filter = uniqueChars.join('');
    
    //Iterate through the original str and filter tha characteres that are unique
    const duplicates = []
    for(let char of str){
      if(!filter.includes(char)) {
        duplicates.push(char);
      }
    }
    return duplicates.join('')
  }
  
  
  //Test cases
  //onlyDuplicates('foundersandcoders')
  //'ondersndoders'
  //onlyDuplicates('colloquial')
  //'ollol'
  //onlyDuplicates('hello')
  //'ll'
  onlyDuplicates('abccdefee')
  //'cceee'