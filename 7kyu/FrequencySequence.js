/*
https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript
instructions:
Return an output string that translates an input string s/$s by replacing each character in s/$s 
with a number representing the number of times that character occurs in s/$s and separating each 
number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
*/

// this is how you can get number of occurences for a certain character
// const character = 'w';
// console.log('hello world'.split(character).length - 1);

//based on that, here is the solution:
const freqSeq = (str, sep) => str.split('').map(char => str.split(char).length - 1).join(sep)

//Test
freqSeq("hello world", "-")
//"1-1-3-3-2-1-1-2-1-3-1"
//freqSeq("19999999", ":")
//"1:7:7:7:7:7:7:7"
//freqSeq("^^^**$", "x")
//"3x3x3x2x2x1"