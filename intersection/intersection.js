// function intersection
// takes in an array of 3 arrays
// returns an array of elements that are common to each of those 3 arrays

// define function

// input: an array of arrays
// output: ONE array of common elements

let intersection = (arrayOfArrays) => {
  // just grabbing the last array (arbitrary) just so we can have a starting point
  let tempArray = arrayOfArrays.pop();

  // we iterate through the array of arrays 
  for (let i = 0; i < arrayOfArrays.length; i++) {
    // grab the current array we want to iterate through
    let currentArr = arrayOfArrays[i];
    // create a result arr
    let resultArr = [];

    // as we iterate through the current array
    for (let j = 0; j < currentArr.length; j++) {
      // if our tempArr contains the value
      if (tempArray.indexOf(currentArr[j]) > -1) {
        // we push to the result array (which should contain common elements)
        resultArr.push(currentArr[j]);
      }
    }

    // we now reset the tempArray to be the resultarr
    tempArray = resultArr;
  }

  return tempArray;

}

// console.log(intersection([[5, 10, 15, 20], [15, 9, 2, 5], [5, 15]]));

let repeater = (char) => {

  let string = char;

  let inner = (character, counter) => {
    if (counter === 5) {
      return character;
    } else {
      character += char;
      counter++;
      return inner(character, counter);
    }
  }

  return inner(string, 1);
}

// console.log(repeater('g'))

let cascade = (number) => {
  // let max = number.toString().length - 1;

  // let innerCascade = (num, maxIterations) => {
  //   if (maxIterations === max) return;

    
  // }

  // cascade(number, 1);

  number = number.toString();
  console.log(number);
  if (number.length === 1) return;
  cascade(number.slice(0, -1));
  console.log(number);
}

cascade(12345);

// const getL = (array) => {
//   if (!array[0]) return 0;
//   let x = 1;
//   console.log(array);
//   return x += getL(array.pop());
// }

// console.log(getL([1]))
// console.log(getL([1, 2]))
// console.log(getL([1, 2, 3, 4, 5]))