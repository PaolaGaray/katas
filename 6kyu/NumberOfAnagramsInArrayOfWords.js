/*
https://www.codewars.com/kata/587e18b97a25e865530000d8/javascript
Instructions:
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:
- There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
- There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

const anagramCounter = (wordsArray) => {
    let sortedWords = wordsArray.map(word =>{
      return word.split('').sort().join('')
    });
    let counter = 0;
    
    sortedWords.forEach((word, index) => {
      for(let i = theIndex+1; i < sortedWords.length; i++){
        if(word === sortedWords[i]){
          numberOfAnagrams++
        }
      }
    })

    return counter;
  }
  
  
  anagramCounter(['dell', 'ledl', 'abc', 'cba'])
  //2
  
  //anagramCounter(['dell', 'ledl', 'lled', 'cba'])
  //3
  
  //anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab'])
  //11



  //Another good solution

  // const anagramCounter = (wordsArray) => {
  //   let wordsArrayMapped = wordsArray.map(word =>{
  //     return word.split('').sort().join('')
  //   });
  //   let counter = 0;
  //   for(let i=0; i <= wordsArrayMapped.length-2; i++){
  //     for(let j=1+i; j <= wordsArrayMapped.length-1; j++){
  //       if(wordsArrayMapped[i] == wordsArrayMapped[j]){
  //         counter++
  //       } 
  //     }
  //   }
  //   return counter;
  // }
  