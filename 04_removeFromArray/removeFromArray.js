const removeFromArray = function(array, ...toRemove) {
  
    for (let item of toRemove){
        if (array.indexOf(item) >= 0){
            array.splice(array.indexOf(item), 1);
        }
    }
  //console.log(array);
  //cycle toRemove

  /*for (let item of toRemove){
    array.slice(array.indexOf(item), 1);
  }*/
  return array;
  //search for item in array
    //if you don't find it return error
    //array.slice(index of item, 1)
  //return array
};

// Do not edit below this line
module.exports = removeFromArray;
