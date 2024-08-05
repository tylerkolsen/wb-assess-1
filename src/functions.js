// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// (Math.abs() is the command for an absolute value. Look up on MDN for more info)
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if (Math.abs(x-y) < 0.001) {
    return true
  } else {
    return false
  }
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return `${person} was drinking ${beverage} at ${location}.`
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  return string.replace(/a|e|i|o|u/gi, "*")
}

//   return string.replace(/a/gi, "*").replace(/e/gi, "*").replace(/i/gi, "*").replace(/o/gi, "*").replace(/u/gi, "*")
// this one was interesting. I tried a few methods, but eventually this one worked. the /x/ allows it to find the instance even inside the same word. the or was a bit tricky
// the g means to search globally instead of stopping at the first instance; the i makes it case insensitive so I don't have to type 5 more uppercase options

// **** Here is my explanation for the regular expressions, and a version of this function written using methods we directly learned during week 1 ****
// I ran into regular expressions through doing Code wars challenges. There were two that used this function: "Vowel Count (7kyu)" and "Disemvowel trolls (7kyu)" where they were also
// replacing various portions of scripts. After looking over the solutions from these I did a rabbit hole dive into regular expressions. I'm not great on the knowledge, but here goes:
// For finding simple expressions within a string (the only use case i've dug into), you can approach it in two ways. You can use quotations to designate the phrase you're looking
// for (ex: "garage") or you can use the / to indicate what you want (ex: /bus/). These evaluations only reach the first example and then stop, so you need to add some additional
// qualifiers to let the method know you want all of the instances. This is what the g after the slashes refers to, which is "global". The i refers to making the search case insensitive.
// there are many methods in regular expressions, but I used the .replace one in this instance because we wanted to perform that action. The basic syntax is:
// string.replace((string you're looking for)any modifiers, what to replace the string you've designated with)

// **** Here is the week 1 technique version of this ****
// function censorVowels(string) {
//   let censoredString = ""
//   for(let i = 0; i < string.length; i++) {
//     if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
//       censoredString += "*"
//     } else {
//       censoredString += string[i]
//     }
//   }
//   return censoredString
// }
// I've tested this using the software, and it checks out

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'

// This function works by placing it into an array and reassembling, but I think I can do this better
// function stickyCase(string) {
//   let stickyWord
//   let stickyArray = []
//   for (let i = 0; i < string.length; i++) {
//     if (i % 2) {
//       stickyArray[i] = string[i].toUpperCase()
//       console.log(stickyArray[i])
//     } else {
//       stickyArray[i] = string[i].toLowerCase()
//     }
//   }
//   for (let i = 0; i < stickyArray.length; i++) {
//     stickyWord += stickyArray[i]
//   }
//   return stickyWord
// }
function stickyCase(string) {
  let stickyWord = ""
  let stickyArray = []
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      stickyWord += string[i].toUpperCase()
    } else {
      stickyWord += string[i].toLowerCase()
    }
  }
    return stickyWord
}
// This avoids creating and dumping the array, and puts each piece directly into a new string

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  return string.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/s/g, "5").replace(/t/g, "7")
  }

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
