/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let maxPrices = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j])
//         maxPrices = Math.max(maxPrices, prices[j] - prices[i]);
//     }
//   }
//   return maxPrices;
// };

var maxProfit = function (prices) {
  let maxProfit = 0;
  let left = 0;

  for (let right = 1; right < prices.length; right++) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
