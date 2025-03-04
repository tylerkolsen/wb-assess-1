// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let greaterArray = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      greaterArray.push(numbers[i])
    }
  }
  return greaterArray
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let goodWordsArray = []
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === "b" || words[i][0] === "B") {
      goodWordsArray.push(words[i])
    }
  }
  return goodWordsArray
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  for (let i = 0; i < additionalItems.length; i++) {
    originalArray.push(additionalItems[i])
  }
  return originalArray
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let itemsArray = []
  for (let i = 0; i < items.length; i++) {
    if (items[i].length === length) {
      itemsArray.push(items[i])
    }
  }
  return itemsArray
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let everyOtherArray = []
  for (let i = 0; i < items.length; i += 2) {
    everyOtherArray.push(items[i])
  }
  return everyOtherArray
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let wordIndexArray = []
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === letter) {
      wordIndexArray.push(i)
    }
  }
  return wordIndexArray
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  items.sort(function(a, b){return b-a})
  console.log(items)
  const smallestArray = []
  for (let i=(items.length - n); i < items.length; i++) {
    smallestArray.push(items[i])
  }
  return smallestArray
}
// pseudocode idea is to create an array with the numbers placed in descending order, and then .pop the end using n for the amount to pop.
// I looked up the .sort method. Unfortunately it sorts by strings, but there was another site that offered the Compare function to allow a mathematical comparison
// array.sort(function(a, b){return a-b}); 
// This one does it in ascending order, so for descending order
// array.sort(function(a, b){return b-a});
// After some struggle, i don't think pop will work. I'm going to do ascending order on the array, then push up to n times
// I also realized it needs to be descending order :). I can put it back in descending order, and then go (array.length - n) to start

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, v) {
  console.log(items)
  for (let i = 0; i < items.length; i++) {
    if (items[i] === v) {
      console.log(i)
      return items.indexOf(v)
    }
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  let numbersArray = []
  for (let i = start; i <= stop; i++) {
    numbersArray.push(i)
  }
  return numbersArray
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
