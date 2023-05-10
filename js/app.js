'use strict';

//TODO: Get users name via a prompt and display name through a custom greeting welcoming to site
let userName = prompt ('Welcome to my biography site! What is your name?');

alert(`Hello ${userName}! Nice to meet you! Lets play a guessing game about me...please answer yes or no`);

//TODO Prompt user for five yes or no questions, and alert user if answered correct or incorrect.
// Do I live in California?
// Do I have children?
// Do I enjoy learning?
// Do I like coding so far?
// Am I enjoying Code Fellows?

let guessOne = prompt('Do I live in California?').toLowerCase();
//console.log(guessOne);

if (
  guessOne === 'yes' ||
  guessOne === 'y'
) {
  alert('That is incorrect! I don\'t live in California I live Texas!');
  //console.log('That is incorrect! I don\'t live in California I live Texas!');
} else if (
  guessOne === 'no' ||
  guessOne === 'n'
) {
  alert('That is correct! I live in Texas!');
  //console.log('That is correct! I live in Texas!');
}

let guessTwo = prompt('Do I have children?').toLowerCase();
//console.log(guessTwo);

if (
  guessTwo === 'yes' ||
  guessTwo === 'y'
) {
  alert('That is correct! I have 3 wonderful kids!');
  //console.log('That is correct! I have 3 wonderful kids!');
} else if (
  guessTwo === 'no' ||
  guessTwo === 'n'
) {
  alert('That is incorrect! I do indeed have 3 wonderful kids!');
  //console.log('That is incorrect! I do indeed have 3 wonderful kids!');
}

let guessThree = prompt('Do I enjoy learning?').toLowerCase();
//console.log(guessThree);

if (
  guessThree === 'yes' ||
  guessThree === 'y'
) {
  alert('That is correct! Learning new things is one of my favorite passions!');
  //console.log('That is correct! Learning new things is one of my favorite passions!');
} else if (
  guessThree === 'no' ||
  guessThree === 'n'
) {
  alert('That is incorrect! I love to learn new things!');
  //console.log('That is incorrect! I love to learn new things!');
}

let guessFour = prompt('Do I enjoy coding so far?').toLowerCase();
//console.log(guessFour);

if (
  guessFour === 'yes' ||
  guessFour === 'y'
) {
  alert('That is correct! Coding is a fun challenge!');
  //console.log('That is correct! Coding is a fun challenge!');
} else if (
  guessFour === 'no' ||
  guessFour === 'n'
) {
  alert('That is incorrect! I enjoy the challenge of coding!');
  //console.log('That is incorrect! I enjoy the challenge of coding!');
}

let guessFive = prompt('Do I enjoy my courses with Code Fellows?').toLowerCase();
//console.log(guessFive);

if (
  guessFive === 'yes' ||
  guessFive === 'y'
) {
  alert('That is correct! I do enjoy the courses with Code Fellows!');
  //console.log('That is correct! I do enjoy the courses with Code Fellows!');
} else if (
  guessFive === 'no' ||
  guessFive === 'n'
) {
  alert('That is incorrect! I do in fact enjoy the courses with Code Fellows!');
  //console.log('That is incorrect! I do in fact enjoy the courses with Code Fellows!');
}

//TODO: Display name back to user in final message via alert

alert(`Thanks for stopping by ${userName}, hope you enjoyed playing the About-Me guessing game!`);
