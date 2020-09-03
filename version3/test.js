'use strict';

/*
1.

Write a function called calcTotalStudents, that:
- Accepts 1 argument, an array of objects
- Sums up the student count per class
- Returns a string mentioning the amount of students HackYourFuture currently has

*/
// Make use of the following array:
const classes = [
  {
    className: 'class27',
    studentCount: 7,
  },
  {
    className: 'class28',
    studentCount: 16,
  },
  {
    className: 'class29',
    studentCount: 12,
  },
];

function calcTotalStudents(classes) {
  const totalStudent = classes.reduce(
    (acc, currentResult) => acc + currentResult.studentCount,
    0,
  );
  return `HackYourFuture currently has ${totalStudent} active students!`;
}
console.log(calcTotalStudents(classes));

// EXPECTED RESULT:
// "HackYourFuture currently has 35 active students!"

/*
2.
Create a function that:
- Accepts 1 argument: an array of strings
- Loops through an array
- Logs to the console “This is my favorite piece of clothing: tshirt!” when the ‘tshirt’ value has been reached
- Logs to the console "I hate this hat/jeans/belt..."

Make use of the following array:
*/
function myFavorite(clothes) {
  clothes.forEach((piece) => {
    if (piece === 't-shirt') {
      console.log(
        `This is my favorite piece of clothing: ${piece} when the ${piece} value has been reached`,
      );
    } else {
      console.log(`I hate this ${piece}`);
    }
  });
}
const clothes = ['hat', 't-shirt', 'jeans', 'belt'];
myFavorite(clothes);
// EXPECTED RESULT:
// "This is my favorite piece of clothing: tshirt!"
// "I hate this hat..."

/*
3.
Create a function that:
- Accepts 1 argument: an array of numbers
- Makes use of the filter method
- Returns a new array with all the negative numbers from the input array

Make use of the following array:



EXPECTED RESULT:
[-3, -9, -2]

*/
const numbers = [-3, 5, 6, -9, 5, -2];
function isNegative(numbers) {
  const negativeNumber = [];
  numbers.filter((negative) => {
    if (negative < 0) {
      negativeNumber.push(negative);
    }
  });
  return negativeNumber;
}
console.log(isNegative(numbers));
/*
4.
Create a function that:
- Takes 2 arguments, both DOM elements
- Moves the content of the first DOM element into the second
- Makes use of the given <p> tags found in the index.html file
- Removes the second DOM element from the DOM
- Hint: make use of the 'insertAdjacentHTML' method
*/
const paraList = document.querySelectorAll('p');
console.log(paraList);
const firstPara = paraList[0];
const secondPara = paraList[1];
console.log(firstPara, secondPara);
function prepend(pElement, targetEle) {
  targetEle.insertAdjacentHTML('afterbegin', pElement.textContent);
  firstPara.remove();
}
prepend(firstPara, secondPara);
/*
EXPECTED RESULT:
<p>
HackYourFuture is a free 7-month web development program for talented refugees and other disadvantaged groups with limited access to education and the labor market. We teach motivated individuals who want to start a career in web
development. No technical background required. Our seven-month program begins every two months.
</p>


*/
