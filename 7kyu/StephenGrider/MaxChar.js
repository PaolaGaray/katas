// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



const maxChar = (str) => {
    const chars = {};
    for(let char of str) {
      if(!chars[char]) {
        chars[char] = 1
      } else {
        chars[char]++
      }
    }
  
    
    const sortable = [];
    for(let char in chars){
      sortable.push([char, chars[char]]);
    }
    sortable.sort(function(a, b) {
      return b[1] - a[1];
    });
    
    return sortable[0][0]
    
  };
  
  
  maxChar('abcccccccd')