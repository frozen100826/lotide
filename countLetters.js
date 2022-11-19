const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
  } else {
    console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
  }

const countLetters = function(phrase) {
  const countStats = {};
  for (let letter of phrase.split('')) {
    countStats[letter] = 0;
  }
  for (let x in countStats) {
    for (let y of phrase.split('')) {
        if (x === y) {
          countStats[x] ++;
        }
    }
  }
}



