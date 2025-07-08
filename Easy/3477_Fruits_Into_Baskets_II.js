/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
// var numOfUnplacedFruits = function (fruits, baskets) {
//   const sortedFruits = fruits.sort((a, b) => a - b);
//   const sortedBaskets = baskets.sort((a, b) => a - b);

//   //   if (
//   //     sortedFruits.length === 1 &&
//   //     sortedBaskets.length === 1 &&
//   //     sortedFruits[0] === sortedBaskets[0]
//   //   )
//   //     return 0;

//   for (let fruit of sortedFruits) {
//     for (let i = 0; i < sortedBaskets.length; ++i) {
//       if (fruit < sortedBaskets[i]) {
//         sortedBaskets.splice(i, 1);
//         break;
//       }

//       if (
//         sortedFruits.length === 1 &&
//         sortedBaskets.length === 1 &&
//         sortedFruits[0] === sortedBaskets[0]
//       )
//         return 0;
//     }
//   }

//   return sortedBaskets.length;
// };

var numOfUnplacedFruits = function (fruits, baskets) {
  const used = new Array(fruits.length).fill(false);

  for (let fruit of fruits) {
    for (let i = 0; i < baskets.length; ++i) {
      if (baskets[i] >= fruit && !used[i]) {
        used.splice(i, 1, true);
        break;
      }
    }
  }
  return used.filter((i) => i === false).length;
};

console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4]));
console.log(numOfUnplacedFruits([3, 6, 1], [6, 4, 7]));
console.log(numOfUnplacedFruits([1, 4], [8, 1]));
console.log(numOfUnplacedFruits([4], [4]));
console.log(numOfUnplacedFruits([5], [3]));
console.log(numOfUnplacedFruits([7, 5], [8, 5]));

// [2, 4, 5] [3, 4, 5]

// [1, 3, 6] [4, 6, 7]
