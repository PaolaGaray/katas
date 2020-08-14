/*
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
Intructions:
Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/

const gooseFilter = (birds) => {
    const birdsFiltered = birds.filter((bird) =>  {
    return (bird !== "African") && (bird !== "Pilgrim") && (bird !== "Roman Tufted") && (bird !== "Toulouse") && (bird !== "Steinbacher")
  
    });
    return birdsFiltered
  }
  
  
  //Test Cases:
  gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
  //["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
  
  //gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
  //["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
  
  //gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
  //[]