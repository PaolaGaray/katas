/*   
https://www.codewars.com/kata/537400e773076324ab000262/javascript

Instructions:
Your job is to group the words in anagrams.

What is an anagram ?
star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

Example
A typical test could be :
// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]


Helpers
The method assertSimilarUnsorted has been preloaded for you in the Solution Sandbox only to compare to arrays without relying on the sorting of the elements.

assertSimilarUnsorted([[1,2], [3]], [[3], [1,2]]); // returns true


Hvae unf !

"I'd advise you to find an efficient way for grouping the words in anagrams otherwise you'll probably won't pass the heavy superhero test cases"
*/


const groupAnagrams = (words) =>{
    let arrAnagrams = words.map(w => w.split('').sort().join(''));
    
    let arrMap = {};
    for(let word of arrAnagrams){
      if(!arrMap[word]) arrMap[word] = 1
       else   arrMap[word]++
    }
    let anagramsOrganized = Object.keys(arrMap);
    
    let result = [];
    for(let anagram of anagramsOrganized) {
      let helper = [];
      for(let word of words){
        if(anagram === wordCleaned(word)){
          helper.push(word);
        }
      }
      result.push(helper);
    }
    return result;
  }
  
  const wordCleaned = (word) => {
    return word.split('').sort().join('');
  }
  
  
  //Test case:
  groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
  //[ [ 'tsar', 'star', 'tars' ], [ 'rat', 'tar' ], [ 'cheese' ] ]