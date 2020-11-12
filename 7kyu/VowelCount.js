/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
Instructions:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

*/
const getCount = (str) => {
    let vowelsCount = 0;
    str.split("").forEach( x => {
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount ++;
      }
    });  
    return vowelsCount;
      }

  
  
  getCount("abracadabra")
  //5

  


//Other solution
//   function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }



//Other solution
//const getCount = (str) => {
//     const charMap = {};
//     for(let char of str){
//       if(!charMap[char]) charMap[char] = 1
//       else charMap[char]++
//     }
//     let vowelsCount = 0;
//     for(let key in charMap) {
//       if(key == 'a' | key == 'e' | key == 'i'| key == 'o'| key == 'u')
//         vowelsCount = vowelsCount + charMap[key]
//       else continue
//     }
//     return vowelsCount;
//   }

