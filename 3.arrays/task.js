  function compareArrays(arr1, arr2) {

    let result 

    const comare = arr1.every((item,i) => item === arr2[i]);

    if (arr1.length === arr2.length && comare === true) {
      result = true;}
    else {
      result = false}

    return result;
}


function advancedFilter(arr) {
  
  let resultArr = arr.filter((number) => number > 0).filter((number) => number % 3 === 0).map((number) => number * 10);

  return resultArr; // array
}
