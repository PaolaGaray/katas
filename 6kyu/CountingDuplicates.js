/*
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

Instructions:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const duplicateCount = (text) =>{
    let textLowerCased = text.toLowerCase();
    //iterate through the string, creating a new object
    let textMap = {};
    for (let char of textLowerCased) {
      if(!textMap[char]){
        textMap[char] = 1
      } else {
        textMap[char]++
      }
    }
    //iterate through the object created in order to get characteres that are duplicated
    let duplicates = 0;
    for(let char in textMap){
      if(textMap[char] > 1) duplicates++
    }
    return duplicates
  }
  
  
  // duplicateCount("")
  // 0
  
  // duplicateCount("abcde")
  // 0
  
  // duplicateCount("aabbcde")
  // 2
  
  //duplicateCount("aabBcde")
  // 2
  
  // duplicateCount("Indivisibility")
  // 1
  
  // duplicateCount("Indivisibilities")
  // 2