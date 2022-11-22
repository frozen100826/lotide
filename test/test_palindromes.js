const isPalindrome = function(s) {
  const stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
}

module.exports = isPalindrome;