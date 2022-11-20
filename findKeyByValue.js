const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
  } else {
    console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
  
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value){
  for (var key of objects){
    if(value === objects.key){
      return key;
    }
  }
  return undefined;
}
  
const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
