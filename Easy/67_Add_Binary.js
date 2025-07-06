/* Given two binary strings a and b, return their sum as a binary string.


Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101" */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let result = [];
  let ia = a.length - 1;
  let ib = b.length - 1;

  while (ia >= 0 || ib >= 0 || carry !== 0) {
    bitA = ia >= 0 ? Number(a[ia]) : 0;
    bitB = ib >= 0 ? Number(b[ib]) : 0;

    let sum = bitA + bitB + carry;
    result.push(sum % 2);
    carry = Math.floor(sum / 2);

    ia -= 1;
    ib -= 1;
  }

  return result.reverse().join("");
};

console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
