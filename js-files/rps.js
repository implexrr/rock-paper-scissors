// Deep Blue button
// Add event listeners to deep_blue button
const a_true_challenge = document.querySelector('#deep_blue');
a_true_challenge.addEventListener('mouseover', warning);
a_true_challenge.addEventListener('mouseout', redact_warning);
a_true_challenge.addEventListener('click', redirect_gg_no_re);


// Warns user about facing Deep Blue
function warning (e) {
  e.target.classList.add('computer_text', 'warning');
  e.target.textContent = 'Are you sure you wanna catch these robo-hands?';
}


// Redacts warning about Deep Blue
function redact_warning (e) {
  e.target.classList.remove('computer_text', 'warning');
  e.target.textContent = 'This is too easy. Is there no one else?';
}




// Rock, paper, scissors buttons
// Select all buttons with rock, paper or scissors on them
const computer_buttons = document.querySelectorAll('.computer_buttons *');
const player_buttons= document.querySelectorAll('.player_buttons *');

// Add event listeners to all rock/paper/scissors buttons
for (let i = 0; i < computer_buttons.length; i++) {
  computer_buttons[i].addEventListener('click', is_allowed);
}
for (let i = 0; i < player_buttons.length; i++) {
  player_buttons[i].addEventListener('click', is_allowed);
}


// Respond with series of images/messages depending on which RPS buttons clicked
function is_allowed (e) {
  const duel = document.querySelector('.duel');
  const results = document.querySelector('.results');
  const body = document.querySelector('body');
  const response = document.createElement("img");
  const response_msg = document.createElement("div");

  // Fade out all non-response elements
  response_msg.classList.add("computer_text");
  duel.style.display = 'none';
  results.style.display = 'none';
  a_true_challenge.style.display = 'none';

  // If user tries to make the computer's RPS choice for it
  if ((e.target.parentNode.classList[0]) == 'computer_buttons') {
    response.src = "/gifs/angry_bender.gif";
    response_msg.textContent = "HEY! You're not allowed to make my choice for me >:(";
  }
  // Initiate countdown if user makes choice of RPS
  else if ((e.target.parentNode.classList[0]) == 'player_buttons') {
    response.src = "/gifs/bender.gif";
    response_msg.textContent = "Thinking . . .";
    setTimeout(() => {
      response_msg.textContent = "Rock . . .";
    }, 500);
    setTimeout(() => {
      response_msg.textContent = "Paper . . .";
    }, 1000);
    setTimeout(() => {
      response_msg.textContent = "Scissors . . .";
    }, 1500);
    setTimeout(() => {
      response_msg.textContent = "Shoot!";
    }, 2000);
    play_round(e);
  }

  // Display response
  body.appendChild(response);
  body.appendChild(response_msg);


  // Fade in all response elements
  setTimeout(() => {
    response.remove();
    response_msg.remove();
    duel.style.display = 'block';
    results.style.display = 'block';
    a_true_challenge.style.display = 'block';
  }, 2500);
}


// Setup for play_round function
let win_count = 0;
let loss_count = 0;
let tie_count = 0;
let losses = document.querySelector('#losses');
let wins = document.querySelector('#wins');
let ties = document.querySelector('#ties');
wins.textContent = 0;
losses.textContent = 0;
ties.textContent = 0;




// Simulate round of RPS
function play_round (e) {
  
  // Remove any currently chosen buttons
  for (let i = 0; i < computer_buttons.length; i++) {
    computer_buttons[i].classList.remove('chosen');
  }
  for (let i = 0; i < player_buttons.length; i++) {
    player_buttons[i].classList.remove('chosen');
  }

  // Add chosen class to button clicked and computer response
  e.target.classList.add('chosen');
  let player_choice = e.target.textContent;
  let computer_choice = Math.floor((Math.random() * 3));

  if (computer_choice == 0) {
    const computer_rock = document.querySelector('.computer_buttons .rock');
    computer_rock.classList.add('chosen');
  }
  else if (computer_choice == 1) {
    const computer_paper = document.querySelector('.computer_buttons .paper');
    computer_paper.classList.add('chosen');
  }
  else {
    const computer_scissors = document.querySelector('.computer_buttons .scissors');
    computer_scissors.classList.add('chosen');
  }

  // Logic for RPS game
  if (player_choice == 'Rock') {
    if (computer_choice == 0) {
      console.log('tie');
      tie_count++;
    }
    else if (computer_choice == 1) {
      console.log('lose');
      loss_count++;
    }
    else {
      console.log('win');
      win_count++;
    }
  }
  else if (player_choice == 'Paper') {
    if (computer_choice == 0) {
      console.log('win');
      win_count++;
    }
    else if (computer_choice == 1) {
      console.log('tie');
      tie_count++;
    }
    else {
      console.log('lose');
      loss_count++;
    }
  }
  else if (player_choice == 'Scissors') {
    if (computer_choice == 0) {
      console.log('lose');
      loss_count++;
    }
    else if (computer_choice == 1) {
      console.log('win');
      win_count++;
    }
    else {
      console.log('tie');
      tie_count++;
    }
  }

  // Add tallies to results div
  wins.textContent = win_count;
  losses.textContent = loss_count;
  ties.textContent = tie_count;
}




// Redirections
function redirect_gg_no_re (e) {
  location.href = "/html-files/deepblue.html";
}