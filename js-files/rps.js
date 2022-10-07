const a_true_challenge = document.querySelector('#deep_blue');
deep_blue.addEventListener('mouseover', warning);
deep_blue.addEventListener('mouseout', redact_warning);
deep_blue.addEventListener('click', gg_no_re);

function warning (e) {
  e.target.textContent = 'Are you sure you wanna catch these robo-hands?';
  e.target.style.backgroundImage = "url('/images/uwotm8.png')";
  e.target.style.backgroundSize = "100% 100%";
  e.target.classList.add("computer_text");
  e.target.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,.3)";
  e.target.style.color = "white";
}

function redact_warning (e) {
  e.target.textContent = 'This is too easy. Is there no one else?';
  e.target.style.backgroundImage = "none";
  e.target.classList.remove("computer_text");
  e.target.style.color = "black";
  e.target.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,0)";
}

function gg_no_re (e) {
  location.href = "/html-files/deepblue.html";
}

const computer_buttons = document.querySelector('.computer_buttons');
const player_buttons= document.querySelector('.player_buttons');
computer_buttons.addEventListener('click', is_allowed)
player_buttons.addEventListener('click', is_allowed)

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
  else {
    response.src = "/gifs/bender.gif";
    response_msg.textContent = "Thinking . . .";
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
  }, 2000);
}
