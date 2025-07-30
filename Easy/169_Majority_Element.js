/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  const object = {};
  const midLength = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    object[nums[i]] = (object[nums[i]] || 0) + 1;
    if (object[nums[i]] > midLength) return nums[i];
  }

  return -1;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
