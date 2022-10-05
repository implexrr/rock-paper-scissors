const a_true_challenge = document.querySelector('#deep_blue');
deep_blue.addEventListener('mouseover', warning);
deep_blue.addEventListener('mouseout', redact_warning);
deep_blue.addEventListener('click', gg_no_re);

function warning (e) {
  e.target.textContent = 'Are you sure you wanna catch these robo-hands?';
  e.target.style.backgroundImage = "url('../images/uwotm8.png')";
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
  location.href = "../html-files/deepblue.html";
}