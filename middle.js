const middle = function(array1) {
  if(array1.length <= 2){
    return [];
    } else if (array1.length % 2 === 0) {
        var middle = [array1[(array1.length/2)],array1[(array1.length)/2 -1]];}
  return middle;
}