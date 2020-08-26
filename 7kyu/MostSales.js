/*
https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript
Instructions:
You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

const top3 = (products, amounts, prices) => {
    const revenues = products.map((productName, index) => {
      return {
        name: productName,
        revenue: prices[index] * amounts[index],
        index:index
      }
    });
    const sorted = revenues.sort((a, b) => {
      return b.revenue - a.revenue
    })
    return sorted.slice(0, 3).map((product) => {
      return product.name
    })
  }



//   //The same solution but with diferent format:

//   const top3 = (products, amounts, prices) =>
//   products
//     .map((name, index) => ({ name, index, revenue: amounts[index] * prices[index] }))
//     .sort((a, b) => b.revenue - a.revenue || a.index - b.index)
//     .slice(0, 3)
//     .map(product => product.name)


  
  //Test
  //top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399])
  //["Cell Phones", "Vacuum Cleaner", "Computer"]
  
  //top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124])
  //['Vacuum Cleaner', 'Gold', ' Speakers']
  
  top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14])
  //['Lego', 'Gold', 'Computer']