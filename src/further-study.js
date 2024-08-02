// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']

// I'm going to try a nested loop function
// I tried a bunch of things, including doing a nested loop for a second time. I figured out a simplier method using .includes
function commonStrings(array1, array2) {
    let commonArray = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (commonArray.includes(array1[i])) {
                break
            }
            if (array1[i] === array2[j]) {
                commonArray.push(array1[i])
                break
            }
        }
    }
    return commonArray
  }

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    let divisibleArray = []
    for (let i = 1; i <= 100; i++) {
        if (i % a === 0 || i % b === 0 || i % c === 0) {  
            divisibleArray.push(i)
        }           
    }
    return divisibleArray
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    let compressionFinal = ""
    let compressCount = 1
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            compressCount ++
        }
        if (string[i] !== string[i + 1] && compressCount === 1) {
            compressionFinal += string[i]
        }
        if (string[i] !== string[i + 1] && compressCount > 1) {
            compressionFinal += compressCount + string[i]
            compressCount = 1          
        }       
    }
    return compressionFinal
}

export { commonStrings, compressString, divisibleByEither };
