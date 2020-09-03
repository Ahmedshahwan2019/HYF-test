'use strict';

/*
1.
Read the following story:

Aisha is a 25 year old girl that lives in Istanbul. She carries with her a basket of fruit, containing 2 apples, 1 banana and 0 cherries.

a) Express Aisha and the basket of fruit in data structures, stored in a variable
b) Explain why you chose the specific data structure for each in 100 words or less

*/
const info = [
  {
    person: {
      name: 'Aisha',
      age: 25,
      gander: 'Female',
      address: 'Istanbul',
    },
    fruit: {
      apple: 2,
      banana: 1,
      cherries: 0,
    },
  },
];
//--- Arry Of object is the best data structure to store a group of data
/*
2.
Take a look at the following names:

getUsers, submitForm, numbers, dataField, checkAuth, fruits, validate

a) Which ones are function names? Explain in 100 words in less.
--getUsers , checkAuth and  submitForm function name is always describe what it does beside of that it start with verb
b) Which ones are variable names? Explain in 100 words in less.
--validate , numbers ,dataField variable name is always describe what it contain 
*/

/*
3.

Write a function that:
- Tells the user if a number is positive or not
- Is called twice, once with a negative and once with a positive number as an argument
- Outputs a string containing the number and the message of whether it's positive or not
*/
function CheckNumber(number) {
  if (number >= 0) {
    return `${number} is a positive number!`;
  } else {
    return `${number} is a negative number!`;
  }
}
console.log(CheckNumber(5));
console.log(CheckNumber(-4));
/*
EXPECTED RESULT: 
"-4 is a negative number!"
"5 is a positive number!"

*/

/*
4. 

Write a function that:
- Accepts 1 argument: a DOM element
- Looks through the text content and highlights all words that have 5 or more letters
- Makes use of the given <p> in the index.html file

EXPECTED RESULT:
https://ibb.co/HN0v9gR (visit the link!)

*/
const paraEl = document.querySelector('p');
function highlightWord(word) {
  paraEl.innerHTML = word.innerText
    .split(' ')
    .map((word) =>
      word.length > 5
        ? `<span style="background-color:yellow">${word}</span>`
        : word,
    )
    .join(' ');
}
highlightWord(paraEl);
