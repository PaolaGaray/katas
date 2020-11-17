// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  'code
//       ' ### '
//       '#####'


const pyramid = (n) => {
    const midpoint = Math.floor((2 * n - 1) / 2);
    for(let row = 0; row < n; row++) {
        let stair = '';
      
        for(let col = 0; col < 2 * n - 1; col++){
           if(midpoint - row <= col  &&  midpoint + row >= col ) {
              stair = stair + '#';
           } else {
             stair = stair + ' ';
           }
      }
      console.log(stair);
    }
  }
  
  
  pyramid(4);
  