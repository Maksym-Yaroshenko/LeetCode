/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   if (nums.length < 2) return -1;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }

//   return -1;
// };

var twoSum = function (nums, target) {
  if (nums.length < 2) return -1;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (map.has(remainder) && map.get(remainder) !== i)
      return [i, map.get(remainder)];
  }

  return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3], 6));
console.log(twoSum([3, 4], 6));
