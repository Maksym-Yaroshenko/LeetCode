/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  //   let charIndex = 0;
  //   for (let j = 1; j < s.length; j++) {
  //     if (s[charIndex] !== s[j]) {
  //     }
  //   }

  const object = new Object();

  for (let char = 0; char < s.length; char++) {
    object[s[char]] = (object[s[char]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (object[s[i]] === 1) return i;
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
