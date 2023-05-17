'use strict';

//Initialize score
let score = 0;

//TODO: Get users name via a prompt and display name through a custom greeting welcoming to site
let userName = prompt ('Welcome to my biography site! What is your name?');

alert(`Hello ${userName}! Nice to meet you! Lets play a guessing game about me...please answer yes or no. (Answer as many questions correctly to achieve the highest score possible!)`);

//TODO Prompt user for five yes or no questions, and alert user if answered correct or incorrect.

//todo Question #1
let guessOne = prompt('Do I live in California?').toLowerCase();

if (
  guessOne === 'yes' ||
  guessOne === 'y'
) {
  alert('That is incorrect! I don\'t live in California I live Texas!');
} else if (
  guessOne === 'no' ||
  guessOne === 'n'
) {
  alert('That is correct! I live in Texas!');
  score++;
  // console.log(score)
};

//todo Question #2
let guessTwo = prompt('Do I have prior education in coding?').toLowerCase();

if (
  guessTwo === 'yes' ||
  guessTwo === 'y'
) {
  alert('That is correct! I have some minor education in coding via Devry University and self-interest learning on the subject!');
  score++;
} else if (
  guessTwo === 'no' ||
  guessTwo === 'n'
) {
  alert('That is incorrect! I have some minor education from Devry University and via self-paced learning on the subject.');
}

//todo Question #3
let guessThree = prompt('Has my prior job experience been related to the tech industry?').toLowerCase();

if (
  guessThree === 'yes' ||
  guessThree === 'y'
) {
  alert('That is incorrect! My prior job experience has been related to providing small business services, not in the tech industry!');
} else if (
  guessThree === 'no' ||
  guessThree === 'n'
) {
  alert('That is correct! My prior job experience has been related to providing small business services, not in the tech industry!');
  score++;
}

//todo Question #4
let guessFour = prompt('Do I enjoy coding so far?').toLowerCase();

if (
  guessFour === 'yes' ||
  guessFour === 'y'
) {
  alert('That is correct! Coding is a fun challenge!');
  score++;
} else if (
  guessFour === 'no' ||
  guessFour === 'n'
) {
  alert('That is incorrect! I do in fact enjoy the challenge of coding!');
}

//todo Question #5
let guessFive = prompt('Do I enjoy my courses with Code Fellows?').toLowerCase();

if (
  guessFive === 'yes' ||
  guessFive === 'y'
) {
  alert('That is correct! My goal is learn as much as possible with Code Fellows! I enjoy it very much!');
  score++;
} else if (
  guessFive === 'no' ||
  guessFive === 'n'
) {
  alert('That is incorrect! My goal is learn as much as possible with Code Fellows! I enjoy it very much!');
}

//todo Question #6
//Establish variables
//Number() converts input in integer value
let guessSix = Number( prompt('Now its time to guess a number between 1 and 20! You only have four attempts! Good luck!') );
let correctNum = 13;
let numOfGuess = 3;

if (guessSix === correctNum) {
  alert(`That is correct! You guessed the number ${correctNum}!`);
  score++;
}

//Loop for the four attempts at guessing correct number
while (
  guessSix !== correctNum &&
  numOfGuess > 0
) {

  //If too high
  if (guessSix > correctNum) {
    guessSix = Number( prompt(`That is too high! Try again. You have ${numOfGuess} attempts left!`) );

    //If correct
    if (guessSix === correctNum) {
      alert(`That is correct! You guessed the number ${correctNum}!`);
      score++;
    }

    //If too low
  } else if (guessSix < correctNum) {
    guessSix = Number( prompt(`That is too low! You have ${numOfGuess} attempts left!`) );

    //If correct
    if (guessSix === correctNum) {
      alert(`That is correct! You guessed the number ${correctNum}!`);
      score++;
    }
  }
  //Decreases number of attempts
  numOfGuess--;
}

//If attempts exhausted and didn't guess correct number, show correct number
if (
  numOfGuess === 0 &&
  guessSix !== correctNum
) {
  alert(`You have run out of attempts! The correct number is ${correctNum}!`);
}

//todo Question #7
//Establish array and variables
let topTenMovies = [
  'the matrix',
  'inception',
  'shutter island',
  'good will hunting',
  'whiplash',
  'christmas vacation',
  'blades of glory',
  'john wick',
  'the mask',
  'grease'
];

numOfGuess = 5; // re-initializing to 5, previously used variable numOfGuess
let guessSeven = prompt ('Next lets see if you can guess one of my favorite movies! You have six attempts!').toLowerCase();

//Loop for number of guesses
for (let i = 0; i < numOfGuess; i++) {
  let movie; //Need this variable to be used later to compare if user prompt matched movie

  //Loop for checking if guess is correct against the array
  for (let j = 0; j < topTenMovies.length; j++) {

    if (topTenMovies[j] === guessSeven) {
      alert (`That is correct! ${guessSeven} is my one of my favorite movies! Here is my full list of top ten favorite movies: ${topTenMovies.toString()}`);
      movie = topTenMovies[j];
      score++;
      break; //If correct breaks out of interior for loop
    }
  }

  //If value stored from array in variable named'movie' matches guess then 'break' out of exterior for loop
  //If value stored from array in variable named 'movie' does NOT match guess then display attempts left
  if (movie === guessSeven) {
    break;
  } else if (movie !== guessSeven) {
    guessSeven = prompt (`That is not correct! You have ${ (numOfGuess - i) } attempts left!`).toLowerCase();
  }

  //Once last attempt used, display ran out attempts and who list from array.
  if (i === numOfGuess - 1) {
    alert ('You have run out of tries! Here is my full list of top ten favorite movies: ' + topTenMovies.toString() );
  }
}

//TODO: Display name back to user in final message via alert
alert(`Thanks for playing the About-Me guessing game ${userName}! You achieved a score of ${score} points! Hope you had fun!`);
