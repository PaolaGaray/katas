/*
https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
Instructions:
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. 
For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = (text) => {
  const arr = text.split('');
  const noDuplicates = arr.filter((ele, index) => {
      return arr.indexOf(ele) === index;
  });
  let result = [];
  noDuplicates.forEach((el) => {
      const occurences = text.split(el).length - 1;
      result.push([el, occurences])
  })
  return result;
}


//Test
orderedCount("abracadabra")
//[ ['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1] ]

//orderedCount("Code Wars")
// [ ['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1] ]

//orderedCount("233312")
//[ ['2', 2], ['3', 3], ['1', 1 ] ]