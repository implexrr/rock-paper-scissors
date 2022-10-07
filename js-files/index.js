// Mean yes button
const mean_yes = document.querySelector("#mean_yes");
mean_yes.addEventListener("mouseover", taunt);
mean_yes.addEventListener("mouseout", redact_taunt);
mean_yes.addEventListener("click", play);

to_fade_mean = document.querySelectorAll(".fade_mean");

function taunt (e) {
  for (let i = 0; i < to_fade_mean.length; i++) {
    to_fade_mean[i].style.display ="none";
  }
  e.target.style.backgroundColor = "lightGreen";
  e.target.textContent="Bring it on you glorified toaster!";
}

function redact_taunt (e) {
  for (let i = 0; i < to_fade_mean.length; i++) {
    to_fade_mean[i].style.display ="block";
  }
  e.target.style.backgroundColor = "white";
  e.target.textContent="Mean yes";
}
function play(e) {
  location.href = "/html-files/rps.html";
}

// Nice yes button
const nice_yes = document.querySelector("#nice_yes");
nice_yes.addEventListener("mouseover", accept);
nice_yes.addEventListener("mouseout", redact_accept);
nice_yes.addEventListener("click", play);

to_fade_nice = document.querySelectorAll(".fade_nice");

function accept (e) {
  for (let i = 0; i < to_fade_nice.length; i++) {
    to_fade_nice[i].style.display ="none";
  }
  e.target.style.backgroundColor = "lightGreen";
  e.target.textContent="Yes, I'd love to play!";
}

function redact_accept (e) {
  for (let i = 0; i < to_fade_nice.length; i++) {
    to_fade_nice[i].style.display ="block";
  }
  e.target.style.backgroundColor = "white";
  e.target.textContent="Nice yes";
}

// Rickroll button
const somewhere_safe = document.querySelector(".no");
const cowards = document.querySelectorAll(".coward");

somewhere_safe.addEventListener("mouseover", run_away);
somewhere_safe.addEventListener("mouseout", stand_ground);
somewhere_safe.addEventListener("click", redirect);

function run_away (e) {
  for (let i = 0; i < cowards.length; i++) {
    cowards[i].style.opacity = 0;
  }
  e.target.style.backgroundColor="red";
}

function stand_ground (e) {
  for (let i = 0; i < cowards.length; i++) {
    cowards[i].style.opacity = 1;
  }
  e.target.style.backgroundColor="white";
}

function redirect (e) {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
