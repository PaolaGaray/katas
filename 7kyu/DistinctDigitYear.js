/*
https://www.codewars.com/kata/58aa68605aab54a26c0001a6/javascript
Instructions:
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, 
find the minimum year number which is strictly larger than the given one and has only distinct digits.

Input/Output
[input] integer year
1000 ≤ year ≤ 9000
[output] an integer
the minimum year number that is strictly larger than the input number year and all its digits are distinct.

*/


function distinctDigitYear(year) {
    var k=1;
    var c=(year+k).toString()
    while (c[0]==c[1] ||c[0]==c[2] ||c[0]==c[3] || c[1]==c[2] || c[1]==c[3] || c[2]==c[3])
    {
      k++;
      c=(year+k).toString();
    }
    return year+k;
  }


  //Test
  distinctDigitYear(1987)
  //2013