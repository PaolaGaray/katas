// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



// const maxChar = (str) => {
//     const chars = {};
//     for(let char of str) {
//       if(!chars[char]) {
//         chars[char] = 1
//       } else {
//         chars[char]++
//       }
//     }
  
//     const sortable = [];
//     for(let char in chars){
//       sortable.push([char, chars[char]]);
//     }
//     sortable.sort(function(a, b) {
//       return b[1] - a[1];
//     });
    
//     return sortable[0][0]
    
//   };
  

//   maxChar('abcccccccd')




  //Other solution
const maxChar = (str) => {
    //create an object with number of repetitions of each char:
    const charMap = {};
    for (let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++
        }
    }
    //iterate through the object created and look for the max 
    let max = 0;
    let maxChar = '';

    for(let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}


