'use strict';

let welcomeUserToPage = () => {
  let userName = prompt ('Welcome to my biography site! What is your name?');
  alert(`Hello ${userName}! Nice to meet you! Lets play a guessing game about me...please answer yes or no. (Answer as many questions correctly to achieve the highest score possible!)`);
  return userName;
}

// Function to play a game asking user questions about the developer.
let playAboutMeGuessingGame = (userName) => {
  let score = 0;

  score += askQuestionOneThruFive();
  score += askQuestionSix();
  score += askQuestionSeven();

  alert(`Thanks for playing the About-Me guessing game, ${userName}! You achieved a score of ${score} points! Hope you had fun!`);
}

let askQuestionOneThruFive = () => {
  let score = 0;
  const questions = [
    {
      question:'Do I live in California?',
      correctAnswer: 'no',
      responseYes: 'That is incorrect! I live in Texas!',
      responseNo: 'That is correct! I live in Texas!'
    },
    {
      question: 'Do I have prior education in coding?',
      correctAnswer: 'yes',
      responseYes: 'That is correct! I have some minor education in coding via Devry University and self-interest learning on the subject!',
      responseNo: 'That is incorrect! I have some minor education from Devry University and via self-paced learning on the subject.'
    },
    {
      question: 'Has my prior job experience been related to the tech industry?',
      correctAnswer: 'no',
      responseYes: 'That is incorrect! My prior job experience has been related to providing small business services, not in the tech industry!',
      responseNo: 'That is correct! My prior job experience has been related to providing small business services, not in the tech industry!'
    },
    {
      question:'Do I enjoy coding so far?',
      correctAnswer: 'yes',
      responseYes: 'That is correct! Coding is a fun challenge!',
      responseNo: 'That is incorrect! I do in fact enjoy the challenge of coding!'
    },
    {
      question: 'Do I enjoy my courses with Code Fellows?',
      correctAnswer: 'yes',
      responseYes: 'That is correct! My goal is learn as much as possible with Code Fellows! I enjoy it very much!',
      responseNo:'That is incorrect! My goal is learn as much as possible with Code Fellows! I enjoy it very much!'
    }
  ];
  const validResponses = ['y', 'yes', 'n', 'no'];

  for (let i = 0; i < questions.length; i++) {
    const userResponse = getUserResponse(questions[i].question, validResponses);
    const isCorrect = (userResponse === 'y' || userResponse === 'yes') ? questions[i].correctAnswer === 'yes' : questions[i].correctAnswer === 'no';
    const responseMessage = (userResponse === 'y' || userResponse === 'yes') ? questions[i].responseYes : questions[i].responseNo;

    alert(responseMessage);

    if (isCorrect) {
      score++;
      alert(`You're current score so far is ${score} point(s)!`);
    }
  }
  return score;
};

// Function to get a valid response from user
let getUserResponse = (question, validResponses) => {
  let response = '';

  do {
    response = prompt(question).toLowerCase();
    if (!validResponses.includes(response)) {
      alert('Invalid entry, please enter a valid response! (Yes or No)')
    }
  } while (!validResponses.includes(response));

  return response;
} 

let isCorrectAnswer = (response, index) => {
  const correctYesIndices = [1, 3, 4];
  const correctNoIndices = [0, 2];

  if ((response === 'y' || response === 'yes') && correctYesIndices.includes(index)) {
    return true;
  }

  if ((response === 'n' || response === 'no') && correctNoIndices.includes(index)) {
    return true;
  }

  return false;
}

let askQuestionSix = () => {
  const correctNum = 13;
  let score = 0;

  for (let i = 0; i < 4; i++) {
    let userResponse = Number(prompt(`Guess a number between 1 thru 15, you have ${4 - i} of 4 attempts left!`));
    
    if (isNaN(userResponse) || userResponse < 1 || userResponse > 15) {
      alert('Invalid entry, please enter a valid number between 1 and 15.');
      i--;
      continue;
    } 
    
    if (userResponse === correctNum) {
      alert(`That is correct! You guessed the number ${correctNum}!`);
      score++;
      alert(`Your current score so far is ${score} points!`);
      break;
    } else if (userResponse > correctNum) {
      alert(`${userResponse} is too high!`);
    } else {
      alert(`${userResponse} is too low!`);
    }
    
    if (i === 3) {
      alert(`You have run out of attempts! The correct number is ${correctNum}!`);
    }
  }
  return score;
}

let askQuestionSeven = () => {
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

  let score = 0;
  
  alert ('Guess one of my favorite movies! You have a total of 6 attempts!');
  
  //Loop for number of guesses
  for (let i = 0; i < 6; i++) {
    let movie;
    let userResponse = prompt(`Enter guess, you have ${ (6 - i) } of 6 attempts left!`).toLowerCase();
    
    //If user doesn't enter anything will prompt user for valid response
    // (!guess) is the same as (guess === '') both check for empty string;
    if (!userResponse) {
      alert('Your guess was blank, please enter a valid response! (Guess my favorite movie)');
      i = i - 1;
      continue;
    }
    
    if (topTenMovies.includes(userResponse)) {
      alert(`That is correct! "${userResponse}" is one of my favorite movies! Here is my full list of top ten favorite movies: ${topTenMovies.join(', ')}`);
      score++;
      break;
    } else {
      alert('That is not correct!');
    }

    if (i === 5) {
      alert(`You have run out of attempts! Here is my full list of top ten favorite movies: ${topTenMovies.join(', ')}`);
    }
  }

  return score;
}

const renderTopTenMovies = () => {
  const topTenMovies = [
    'The Matrix',
    'Inception',
    'Shutter Island',
    'Good Will Hunting',
    'Whiplash',
    'Christmas Vacation',
    'Blades of Glory',
    'John Wick (all chapters)',
    'The Mask',
    'Grease'
  ];

  const movieListElement = document.getElementById('topTenMovies');
  movieListElement.innerHTML = '';

  topTenMovies.forEach((movie) => {
    const listItem = document.createElement('li');
    listItem.textContent = movie;
    movieListElement.appendChild(listItem);
  });
}

const username = welcomeUserToPage();
playAboutMeGuessingGame(username);
renderTopTenMovies();