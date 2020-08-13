/*
https://www.codewars.com/kata/57fe50d000d05166720000b1
Instructions:
You need to approach your boss in order to ask a sabbatical period. Her decision will be based on three parameters:
val= your value to the organisation
happ= her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string 'x'.
Note that if x contains three instances of the letter 'l', that still scores three points, 
even though there is only one in the word sabbatical.
If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', 
else return 'Back to your desk, boy.'.
*/


const sabb = (s, val, happiness) => {
    let ss = s.split('s').length-1;
    let as = s.split('a').length-1;
    let bs = s.split('b').length-1;
    let ts = s.split('t').length-1;
    let is = s.split('i').length-1;
    let cs = s.split('c').length-1;
    let ls = s.split('l').length-1;
  
    let counter = val + happiness + ss + as + bs + ts + is + cs + ls ;
  
    if (counter > 22) return('Sabbatical! Boom!');
    else return ('Back to your desk, boy.');
  }


  //Test:
sabb('Can I have a sabbatical?', 5, 5)
//sabb('Why are you shouting?', 7, 2)
//sabb('What do you mean I cant learn to code??', 8, 9)
//sabb('Please calm down', 9, 1)