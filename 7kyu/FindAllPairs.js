/*
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/javascript
Instructions:]
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. 
E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

Examples:
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/


const duplicates = (array) => {
    // sort the array
    array.sort((a, b) => b - a)

    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        // check if the following number is the same -> we found a pair 
        if (array[i] === array[i + 1]) {
            counter++;
            // if we found a pair we have to jump by one -> setting the index to a position after the pair
            i++;
        }
    }
    return counter;
}


//Test
duplicates([1, 2, 5, 6, 5, 2])
//2
//duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])
//4
//duplicates([0, 0, 0, 0, 0, 0, 0])
//3
//duplicates([1000, 1000])
//1
//duplicates([])
//0
//duplicates([54]
//0