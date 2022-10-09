const a_true_challenge = document.querySelector('#deep_blue');
deep_blue.addEventListener('mouseover', warning);
deep_blue.addEventListener('mouseout', redact_warning);
deep_blue.addEventListener('click', gg_no_re);

function warning (e) {
  e.target.textContent = 'Coward.';
  e.target.style.backgroundImage = "url('/images/uwotm8.png')";
  e.target.style.backgroundSize = "100% 100%";
  e.target.classList.add("computer_text");
  e.target.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,.3)";
  e.target.style.color = "white";
}

function redact_warning (e) {
  e.target.textContent = 'Take me back please!';
  e.target.style.backgroundImage = "none";
  e.target.classList.remove("computer_text");
  e.target.style.color = "black";
  e.target.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,0)";
}

function gg_no_re (e) {
  location.href = "/html-files/rps.html";
}

const computer_buttons = document.querySelectorAll('.computer_buttons *');
const player_buttons= document.querySelectorAll('.player_buttons *');
for (let i = 0; i < computer_buttons.length; i++) {
  computer_buttons[i].addEventListener('click', is_allowed);
}
for (let i = 0; i < player_buttons.length; i++) {
  player_buttons[i].addEventListener('click', is_allowed);
}

function is_allowed (e) {
  let duel = document.querySelector('.duel');
  let results = document.querySelector('.results');
  let body = document.querySelector('body');
  
  let response = document.createElement("img");
  let response_msg = document.createElement("div");
  if ((e.target.parentNode.classList[0]) == 'computer_buttons') {
    response.src = "/gifs/angry_bender.gif";
    response_msg.textContent = "HEY! You're not allowed to make my choice for me >:(";
  }
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

  response_msg.classList.add("computer_text");

  duel.style.display = 'none';
  results.style.display = 'none';
  a_true_challenge.style.display = 'none';

  body.appendChild(response);
  body.appendChild(response_msg);

  setTimeout(() => {
    response.remove();
    response_msg.remove();
    duel.style.display = 'block';
    results.style.display = 'block';
    a_true_challenge.style.display = 'block';
  }, 2500);
}


let win_count = 0;
let loss_count = 0;
let tie_count = 0;
let losses = document.querySelector('#losses');
let wins = document.querySelector('#wins');
let ties = document.querySelector('#ties');
wins.textContent = 0;
losses.textContent = 0;
ties.textContent = 0;

function play_round (e) {
  const computer_choices = document.querySelectorAll('.computer_buttons *');
  const player_choices = document.querySelectorAll('.player_buttons *');

  for (let i = 0; i < computer_buttons.length; i++) {
    computer_buttons[i].classList.remove('chosen');
  }
  for (let i = 0; i < player_buttons.length; i++) {
    player_buttons[i].classList.remove('chosen');
  }

  e.target.classList.add('chosen');
  let player_choice = e.target.textContent;

  if (player_choice == 'Scissors') {
    const computer_rock = document.querySelector('.computer_buttons .rock');
    computer_rock.classList.add('chosen');
  }
  else if (player_choice == 'Rock') {
    const computer_paper = document.querySelector('.computer_buttons .paper');
    computer_paper.classList.add('chosen');
  }
  else {
    const computer_scissors = document.querySelector('.computer_buttons .scissors');
    computer_scissors.classList.add('chosen');
  }

  loss_count++;
  losses.textContent = loss_count;
}

