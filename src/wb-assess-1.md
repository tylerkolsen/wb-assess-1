# Unit 1 Assessment: Written Questions

> To select an answer for the multiple choice questions, put an `x` inside the square brackets (`[ ]`) like this:
> ```md
> - [ ] This is the answer!
> ```
>
> **Pro tip:** You might find it easier to read the assessment through VS Code's Markdown Preview. To view the preview for this document, open the Command Palette (<kbd>Cmd+Shift-P</kbd> or <kbd>Ctrl+Shift-P</kbd>) and run `Markdown: Open Preview to the Side`.

## A. Multiple choice questions

### A.1. Which statement is true?

Which statement is true about JavaScript?

- [ ] **A.** JavaScript is case insensitive, so `true` is the same as `True`.
- [x] **B.** JavaScript ignores whitespace characters like spaces and newline characters.
- [ ] **C.** JavaScript requires you to end all statements with a semicolon (`;`).
- [ ] **D.** All of the above are true.
- [ ] **E.** None of the above are true.

### A.2. Turn `sum` to `2`.

Assume you've initialized a variable, `sum`, like so:

```js
let sum = 1;
```

Which of these lines of code will cause `sum` to have a value of `2`? You can select more than one
answer.

- [ ] **A.** `sum++`
- [ ] **B.** `sum += 1`
- [ ] **C.** `sum = sum + 1`
- [x] **D.** All of the above
- [ ] **E.** Some of the above

### A.3. What's the output?

What's the output of the program below?

```js
const result = 1 < 100 || 'hello' === 'hi';
console.log(result);
```

- [x] **A.** `true`
- [ ] **B.** `false`
- [ ] **C.** `undefined`
- [ ] **D.** N/A because the code has an error

### A.4. What's the output?

What's the output of the program below?

```js
const word = '';
if (word) {
  console.log('yay!');
} else {
  console.log('no :(');
}
```

- [ ] **A.** `yay!`
- [x] **B.** `no :(`
- [ ] **C.** An empty line
- [ ] **D.** N/A because the code has an error

### A.5. Fill in the blank

The code below is incomplete. There's a blank space inside the `for` loop:

```js
const fruits = ['apple', 'berry', 'cherry'];
for (______) {
  console.log(fruit);
}
```

Fill in the blank---select the code that will produce the following output:

```text
apple
berry
cherry
```

- [ ] **A.** `const fruit in fruits`
- [x] **B.** `const fruit of fruits`
- [ ] **C.** `let fruit = 0; fruit < fruits.length; fruit++`
- [ ] **D.** None of the above

### A.6. What will happen?

What will happen when we run the program below? If there's more than one option that seems
correct, pick the one you think is **most accurate**.

```js
function makeWordArray(phrase) {
  return phrase.split(' ');
}
```

- [ ] **A.** Nothing happens because the program errors out.
- [x] **B.** It defines a function called `makeWordArray` and converts `phrase` into an array of words.
- [ ] **C.** It defines a function called `makeWordArray` and outputs a word array.
- [ ] **D.** It defines a function called `makeWordArray` but nothing else happens.

### A.7. Identify the error

Which statement best describes the error below?

```js
console.log'hi';
// expected output:
// hi
```

- [x] **A.** The code causes an error because there should be parentheses around `'hi'`.
- [ ] **B.** The code causes an error because `console.log` isn't a function.
- [ ] **C.** The code causes an error because the code will run but it won't output anything.
- [ ] **D.** There is no error; the code generates the expected output.

### A.8. Identify the error

Which statement best describes the error below?

```js
const fruits = ['apple', 'berry', 'cherry'];
console.log(fruits[fruits.indexOf('apple')]);
// expected output:
// apple
```

- [ ] **A.** The code causes an error because `fruits[fruits.indexOf('apple')]` isn't valid
  JavaScript syntax.
- [ ] **B.** The code causes an error because `fruits.indexOf('apple')` doesn't return a valid
  index number.
- [ ] **C.** The code causes an error because it outputs `0` instead of the expected output.
- [x] **D.** There is no error; the code generates the expected output.

### A.9. Identify the error

Which statement best describes the error below?

```js
const words = ['js', 'html', 'css'];
for (const w of words) {
  console.log(words.toUpperCase());
}
// expected output:
// JS
// HTML
// CSS
```

- [ ] **A.** The code causes an error because `w` needs to be a `let` variable.
- [x] **B.** The code causes an error because `words` is an array and `toUpperCase()` isn't a
  valid array function.
- [ ] **C.** The code causes an error because it will output `['JS', 'HTML', 'CSS']` three times.
- [ ] **D.** There is no error; the code generates the expected output.

### A.10. Identify the error

Which statement best describes the error below?

```js
const nums = [500, 200, 440];
const numStrings = [];
for (let i = 0; i <= nums.length; i++) {
  numStrings.push(nums[i].toString());
}
console.log(numStrings);
// expected output:
// ['500', '200', '440']
```

- [ ] **A.** The code causes an error because `numStrings` needs to be a `let` variable.
- [x] **B.** The code causes an error because `i <= nums.length` should be `i < nums.length`
- [ ] **C.** The code causes an error because `i++` isn't valid JavaScript syntax.
- [ ] **D.** There is no error; the code generates the expected output.

### A.11. Identify the error

Which statement best describes the error below?

```js
function outputArgs(a, b, c) {
  if (a) {
    console.log(a);
  }
  if (b) {
    console.log(b);
  }
  if (c) {
    console.log(c);
  }
}
outputArgs('hi', 'bye');
// expected output:
// hi
// bye
```

- [ ] **A.** The code causes an error because `outputArgs` takes in three arguments but it's being
  called with just two.
- [ ] **B.** The code causes an error because it will output `hi`, `bye`, and `undefined` instead
  of the expected output.
- [ ] **C.** The code causes an error because the `a`, `b`, and `c` variables haven't been
  initialized.
- [x] **D.** There is no error; the code generates the expected output.

## B. Free response

### B.1. Answer the questions below in your own words.

**_What is the purpose of functions?_**

```
Functions can be used to create named blocks of code that can be executed/reused later. They help you keep code DRY and maintainable.'
So, the phase above was defaulted into this question. Rather than erase it, I'd rather make sure you're aware of this for the future. To put the purpose of functions into my own words, each function acts like a machine. We can create a function to perform a specific task, and then call it later in our code as often as we require. This allows us to write much less code, and have an easier time debugging errors as all of our operations are located in one place.
Functions also allow us to conveniently use operations in lower scope operations (children) such as other functions or other conditional statements. This allows us to design a logic framework more easily for higher complexity tasks. 
```

**_What is the difference between `console.log` and `return`?_**

```
console.log is a method that allows us to print whatever we desire onto the console. Return is a command that allows us to specify the end of a function. There are many differences between these, so I'll try to break it down
1. console.log doesn't change anything within the code. All console.log does is print what we command it to print. It can't save anything to a variable. It can technically perform operations within the parenthesis to invoke it (ex: console.log(2 + 1) returns 3), but it can't update or change anything within the code
return on the other hand can assign values to variables.
2. console.log is great for debugging, as we can check processes within our code. Loops, if/else statements and functions usually output something, but without a console.log command we can't "see" the changes taking place. The computer merely follows the logic we've programmed; it doesn't know when a logic error has been made, and so can't tell us something is wrong.
return can only be used within a function, and we don't get to "see" what the logic does unless we include a console.log command.
3. console.log, as it doesn't modify data, can't be used to tell the code any logic.
return can modify data, and allows us to specify a stopping point within code, allowing for logic dependent on our needs
```

**_What's the difference between defining and calling a function?_**

```
Defining a function is letting our code know that a function exists, and telling it the logic it needs to perform a task. This definition helps our code know the name of the function, any parameters the function requires, and then gives the code to run when we call it
Ex: function functionName(parameter) {
  //code to run
}
The function can have as many parameters as needed, or none. We specify how we want the machine to run, but this doesn't actually run the code

Calling or invoking a function is when we actually run the code that we've set up within the function. We don't have to know anything about the inner workings of the function to call it; we merely need to know its name, and the parameters that it requires. 
Ex: functionName(argument)
We use arguments within the function to assign values to the parameters that we gave when we initially defined the function
```

### B.2. Describe these data types.

Write a short description of the following data types:

**_String_**

```
Primitive data type, which means it can only have one value.
Strings are any combination of characters, and merely represent those characters in the order that they are placed. Anything within a string will be assumed to be a string, so even if we write code elements these won't be read as code.
We let the computer know that data is a string type by placing it within single or double quotations (ex: "" or ''). This data type also tends to be higher priority, so if you combine strings with other data types, javascript may attempt to convert the other data type to also be a string to make an operation occur.
```

**_Number_**

```
Primitive data type
Number represents characters that have mathematical meaning. These can be integers (whole numbers with no decimal), or floats (numbers that contain a decimal). These are written into the code directly as the number. Javascript will interpret this data type and allow mathematical operators (+, -, *, /, etc.) to occur with them
```

**_Boolean_**

```
Primitive data type
Boolean values represent one of two arguments: true or false. These values allow us to make conditional statements. These are common outputs from conditional statements, but can also be entered into the code by using true or false. An important note is that these are case sensitive, so you must write them all lower case in order for the computer to recognize them as boolean values.
```

**_Array_**

```
Arrays are a non-primitive data type. This means that there can be more than one value in these, and you can have multiple data types within arrays as well. 
Arrays are multiple pieces of data, each placed sequentially within the array. The data included can be any primitive data type, and can even include other arrays that become nested into the array.
Ex: ["String", "Dog", 8, true]
We designate an array by using square brackets []. Each value stored is then separated by a comma. These are useful for many reasons, but the main thing we've talked about is that arrays allow a single operation to be performed on multiple data types in a succinct fashion.
```

### B.3. Trace the value of `x`

Consider the following program:

```js
let x = 5;
let y = 0;
while (y < 3) {
  x = x + 5;
  y = y + 1;
  console.log(x);
}
```

The lines below represent the value of `y` and `x` at the end of each iteration of the `while` loop.
Given the values for `y`, replace the `??` with the values for `x`. The first line has been
completed for you.

```
Initial values: y = 0, x = 5
1:              y = 1, x = 10
2:              y = 2, x = 15
3:              y = 3, x = 15
At y=3, the while loop will no longer have a true condition, and so it won't run the loop anymore. This means that x will not be modified, so it will stay the same value as it was before at y=2
```
