'use strict';

//TODO: Get users name via a prompt and display name through a custom greeting welcoming to site
let userName = prompt ('Welcome to my biography site! What is your name?');

alert(`Hello ${userName}! Nice to meet you! Lets play a guessing game about me...please answer yes or no`);

//TODO Prompt user for five yes or no questions, and alert user if answered correct or incorrect.
// Do I live in California?
// Do I have prior experience in coding?
// Has my prior job experience been related to the tech industry?
// Do I enjoy coding so far?
// Do I enjoy my courses with Code Fellows?

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

let guessTwo = prompt('Do I have prior education in coding?').toLowerCase();
//console.log(guessTwo);

if (
  guessTwo === 'yes' ||
  guessTwo === 'y'
) {
  alert('That is correct! I have some minor education in coding via Devry University and self-interest learning on the subject!');
  //console.log('That is correct! I have some minor education in coding via Devry University and self-interest in the subject!');
} else if (
  guessTwo === 'no' ||
  guessTwo === 'n'
) {
  alert('That is incorrect! I have some minor education from Devry University and via self-paced learning on the subject.');
  //console.log('That is incorrect! I have some minor education from Devry University and via self-paced learning on the subject.');
}

let guessThree = prompt('Has my prior job experience been related to the tech industry?').toLowerCase();
//console.log(guessThree);

if (
  guessThree === 'yes' ||
  guessThree === 'y'
) {
  alert('That is incorrect! My prior job experience has been related to providing small business services, not in the tech industry!');
  //console.log('That is incorrect! My prior job experience is in small business services not in the tech industry!');
} else if (
  guessThree === 'no' ||
  guessThree === 'n'
) {
  alert('That is correct! My prior job experience has been related to providing small business services, not in the tech industry!');
  //console.log('My prior job experience has been related to providing small business services, not in the tech industry!');
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
  alert('That is incorrect! I do in fact enjoy the challenge of coding!');
  //console.log('That is incorrect! I enjoy the challenge of coding!');
}

let guessFive = prompt('Do I enjoy my courses with Code Fellows?').toLowerCase();
//console.log(guessFive);

if (
  guessFive === 'yes' ||
  guessFive === 'y'
) {
  alert('That is correct! My goal is learn as much as possible with Code Fellows! I enjoy it very much!');
  //console.log('That is correct! My goal is learn as much as possible with Code Fellows! I enjoy it very much!');
} else if (
  guessFive === 'no' ||
  guessFive === 'n'
) {
  alert('That is incorrect! My goal is learn as much as possible with Code Fellows! I enjoy it very much!');
  //console.log('That is incorrect! My goal is learn as much as possible with Code Fellows! I enjoy it very much!');
}

//TODO: Display name back to user in final message via alert

alert(`Thanks for stopping by ${userName}, hope you enjoyed playing the About-Me guessing game!`);
