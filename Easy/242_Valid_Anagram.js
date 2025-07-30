/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//    if (s.length !== t.length) return false;

// const map = new Map();
//    for (let i = 0; i < s.length; i++) {
//        map.set(s[i], i);
//        }
//        console.log(map);

//        for (let i = 0; i < t.length; i++) {
//            if (!map.has(t[i])) {
//                return false;
//                }
//                // map.delete(t[i]);
//                }

//                return true;
// }
// ---------------------------------------------------------------------------
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   const object = new Object();
//   for (let i = 0; i < s.length; i++) {
//     object[i] = s[i];
//   }

//   for (let i = 0; i < t.length; i++) {
//     const a = Object.values(object).find((arg) => arg === t[i]);
//     console.log(a);
//   }

//   const sSort = sort(s);
//   const tSort = sort(t);
//   for (let i = 0; i < s.length; i++) {
//     if (sSort[i] !== tSort[i]) return false;
//   }

//   return true;
// };
// function sort(str) {
//   const arr = str.split("");
//   return arr.sort().join("");
// }

// ---------------------------------------------------------------------------

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const object = new Object();

  for (let char = 0; char < s.length; char++) {
    object[s[char]] = (object[s[char]] || 0) + 1;
  }
  console.log(object);

  for (let char = 0; char < t.length; char++) {
    if (!object[t[char]]) return false;
    --object[t[char]];
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("aacc", "ccac"));
