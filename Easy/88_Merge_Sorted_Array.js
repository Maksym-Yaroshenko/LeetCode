/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// connection with creation of a new array
// var merge = function (nums1, m, nums2, n) {
//   const totalArr = new Array();
//   let i = 0,
//     j = 0;

//   const maxLength = m;

//   if (!m && !n) {
//     return [];
//   } else if (m && !n) {
//     return nums1;
//   } else if (!m && n) return nums2;

//   while (i < maxLength && j < maxLength) {
//     if (nums1[i] === 0) {
//       i++;
//       continue;
//     }
//     if (nums2[j] === 0) {
//       j++;
//       continue;
//     }
//     if (nums1[i] < nums2[j]) {
//       totalArr.push(nums1[i]);
//       i++;
//     } else {
//       totalArr.push(nums2[j]);
//       j++;
//     }
//   }

//   while (i < maxLength) {
//     totalArr.push(nums1[i]);
//     i++;
//   }

//   while (j < maxLength) {
//     totalArr.push(nums2[j]);
//     j++;
//   }

//   return totalArr;
// };

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let position = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[position--] = nums1[i--];
    } else {
      nums1[position--] = nums2[j--];
    }
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
