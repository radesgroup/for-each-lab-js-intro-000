function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  const evens = [2, 4, 6, 8]
  evens.forEach(callback)
  return evens
}

function doToArray(array, callback) {
  array.forEach((x) => callback(x))
}

















/*function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- pretty cool, right?
console.log(animals);*/
