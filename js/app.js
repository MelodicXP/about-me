'use strict';

//Initialize score
let score = 0;

//TODO: Get users name via a prompt and display name through a custom greeting welcoming to site
let userName = prompt ('Welcome to my biography site! What is your name?');

alert(`Hello ${userName}! Nice to meet you! Lets play a guessing game about me...please answer yes or no. (Answer as many questions correctly to achieve the highest score possible!)`);

//TODO Prompt user for five yes or no questions, and alert user if answered correct or incorrect.

function questionOneThruFive() {
  let questions = [
    'Do I live in California?',
    'Do I have prior education in coding?',
    'Has my prior job experience been related to the tech industry?',
    'Do I enjoy coding so far?',
    'Do I enjoy my courses with Code Fellows?'
  ];

  let yesAnswers = [
    'That is incorrect! I live in Texas!',
    'That is correct! I have some minor education in coding via Devry University and self-interest learning on the subject!',
    'That is incorrect! My prior job experience has been related to providing small business services, not in the tech industry!',
    'That is correct! Coding is a fun challenge!',
    'That is correct! My goal is learn as much as possible with Code Fellows! I enjoy it very much!'
  ];

  let noAnswers = [
    'That is correct! I live in Texas!',
    'That is incorrect! I have some minor education from Devry University and via self-paced learning on the subject.',
    'That is correct! My prior job experience has been related to providing small business services, not in the tech industry!',
    'That is incorrect! I do in fact enjoy the challenge of coding!',
    'That is incorrect! My goal is learn as much as possible with Code Fellows! I enjoy it very much!'
  ];

  for (let i = 0; i < 5; i++) {
    let guess = prompt(questions[i]).toLowerCase();
    let yes;
    let no;

    if (
      guess === '' ||
      (guess !== 'y' && guess !== 'yes' && guess !== 'n' && guess !== 'no')
    ) {
      alert('Invalid entry, please enter a valid response! (Yes or No)');
      i = i - 1;
    }

    if (
      guess === 'yes' ||
      guess === 'y'
    ) {
      alert( yesAnswers[i] );
      yes = yesAnswers[i];
    } else if (
      guess === 'no' ||
      guess === 'n'
    ) {
      alert( noAnswers[i] );
      no = noAnswers[i];
    }

    if (
      yes === yesAnswers[1] ||
      yes === yesAnswers[3] ||
      yes === yesAnswers[4] ||
      no === noAnswers[0] ||
      no === noAnswers[2]
    ) {
      score++;
      alert(`Your current score so far is ${score} points!`);
    }
  }

}

questionOneThruFive();

//todo Question #6

function questionSix () {
  let correctNum = 13;

  for (let i = 0; i < 4; i++) {
    let guess = Number( prompt(`Guess a number between 1 thru 15, you have ${4 - i} of 4 attempts left!`) );

    if (
      guess === '' ||
      (isNaN(guess)) ||
      guess > 15 ||
      guess < 1
    ) {
      alert('Invalid entry, please enter a valid response! (Number between 1 - 15)');
      i = i - 1;
    }

    if (guess === correctNum) {
      alert(`That is correct! You guessed the number ${correctNum}!`);
      score++;
      alert(`Your current score so far is ${score} points!`);
      break;
    } else if (guess > correctNum) {
      alert(`${guess} is too high!`);
    } else if (guess < correctNum) {
      alert(`${guess} is too low!`);
    }

    if (i === 3) {
      alert(`You have run out of attempts! The correct number is ${correctNum}!`);
    }
  }

}

questionSix();

//todo Question #7

function questionSeven () {
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

  alert ('Guess one of my favorite movies! You have a total of 6 attempts!');

  //Loop for number of guesses
  for (let i = 0; i < 6; i++) {
    let movie;
    let guess = prompt(`Enter guess, you have ${ (6 - i) } of 6 attempts left!`).toLowerCase();

    //If user doesn't enter anything will prompt user for valid response
    // (!guess) is the same as (guess === '') both check for empty string;
    if (guess === '') {
      alert('Your guess was blank, please enter a valid response! (Guess my favorite movie)');
      i = i - 1;
    }

    //Loop for checking if guess is correct against the array
    for (let j = 0; j < topTenMovies.length; j++) {

      if (guess === topTenMovies[j]) {
        alert (`That is correct! ${guess} is my one of my favorite movies! Here is my full list of top ten favorite movies: ${topTenMovies.toString()}`);
        score++;
        alert(`Your current score so far is ${score} points!`);
        movie = topTenMovies[j]; //movia variable stores movie from array
        break; //breaks out of inner loop 'j'
      }
    }

    //If value stored from array in variable named'movie' matches guess then 'break' out of exterior for loop
    //If value stored from array in variable named 'movie' does NOT match guess then display attempts left
    if (guess === movie) {
      break;
    } else if (guess !== movie && guess) { //checks if guess was not equal to the movie and that there is a string input by user
      alert('That is not correct!');
    }

    //Once last attempt used, display ran out attempts and who list from array.
    if (i === 5) {
      alert ('You have run out of tries! Here is my full list of top ten favorite movies: ' + topTenMovies.toString() );
    }
  }
}

questionSeven();

//TODO: Display name back to user in final message via alert
alert(`Thanks for playing the About-Me guessing game ${userName}! You achieved a score of ${score} points! Hope you had fun!`);
