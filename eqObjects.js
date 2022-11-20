const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
  } else {
    console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
  }
        
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
  } else {
    for(let key in object1){
      if((Array.isArray(object1[key]) && Array.isArray(object2[key]))){
          if(eqArrays(object1[key], object2[key])=== false){
              return false
          }
      } else {
          if (object1[key] !== object2[key]) {
          return false;
          }
        }
    }
      

      return true;

  }
}