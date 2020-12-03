/*
https://www.codewars.com/kata/58429d526312ce1d940000ee/javascript

Instructions:
Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.

#Have fun!

*/

const balance = (arr1, arr2) => {
    let arr1Map = {}
    arr1.forEach( char => arr1Map[char] = arr1Map[char] + 1 || 1 );
    let arr2Map = {};
    arr2.forEach( char => arr2Map[char] = arr2Map[char] + 1 || 1 );
  
    return Object.values(arr1Map).sort().join('') === Object.values(arr2Map).sort().join('') ? true: false
  }


balance(["a","b","c","d","e","f","g","g"], ["h","h","i","j","k","l","m","n"])
//true