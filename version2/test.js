'use strict';

/*
1.
Create a function called findWordCount that:
- Takes the following string as an argument: I am studying at Hack Your Future !
- Returns the word count in the string

EXPECTED RESULT:
7

*/
function findWordCount(word) {
  const result = word.split(' ').length;
  return result;
}
findWordCount('I am studying at Hack Your Future !');
/*
2.
Create a function called "repeatify" function, that:
- Accepts 2 arguments: and a string to be repeated, an integer that specifies how many times the string has to be repeated
- Returns the string repeated the number of times specified. 

EXPECTED RESULT:
hellohellohello.

*/
const repeatably = (text, index) => text.repeat(index);

repeatably('hello', 3);
/*
3.
Fill in the empty parts:
*/
const numbers = [4, 6, 2];
const x = 0;

while (x > numbers.length) {
  let number = numbers[x];
  console.log(number);
  if (numbers[x] < 4) {
    console.log(`4 is smaller than  ${numbers}`);
  } else if (numbers[x] > 4) {
    console.log(`4 is greater than  ${numbers}`);
  } else {
    console.log(`4 is equal than  ${numbers}`);
  }
  x++;
}

/*
4.
Create a function that:
- Accepts an array of strings
- Every time the page refresh, the function randomly picks a value
- Displays the value (an image link) into the DOM, inside an <img>

Make use of the following array:*/

const image = [
  'https://images.unsplash.com/photo-1598192156283-eca33f374f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1598184274576-e4fccfd84c7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80',
  'https://images.unsplash.com/photo-1598017194236-d70c64fab8a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1598192156191-6aa173f2bae1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1598186004076-e062b6555c53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
];
function generateImage(image) {
  const randomImage = image[Math.floor(Math.random() * image.length)];
  const divEl = document.getElementById('container');
  const imgEl = document.createElement('img');
  imgEl.src = randomImage;
  divEl.appendChild(imgEl);
}

generateImage(image);
