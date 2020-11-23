/*
Triple Add

tripleAdd(10)(20)(30, 40); 
// returns total of all 3 numbers: 60

*/

const tripleAdd = ((num1)=>{
    return (num2) => {
      return (num3, num4) => {
        return num1 + num2 + num3 + num4
      }
    }
  });
  
  tripleAdd(10)(20)(30, 40);