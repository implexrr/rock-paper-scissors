// Button: "Mean yes"
// Add event listeners for "Mean yes" button
const mean_yes = document.querySelector("#mean_yes");
mean_yes.addEventListener("mouseover", taunt);
mean_yes.addEventListener("mouseout", redact_taunt);
mean_yes.addEventListener("click", redirect_play);

// Select all the buttons that we want to fade away when we mouse over the mean_yes button
const to_fade_mean = document.querySelectorAll(".fade_mean");


// Fade out all buttons except for the mean_yes button
function taunt (e) {
  for (let i = 0; i < to_fade_mean.length; i++) {
    to_fade_mean[i].style.display = "none";
  }

  // Modify the mean_yes button
  e.target.style.backgroundColor = "lightGreen";
  e.target.textContent = "Bring it on you glorified toaster!";
}


// Fade back in all the buttons faded out by mean_yes
function redact_taunt (e) {
  for (let i = 0; i < to_fade_mean.length; i++) {
    to_fade_mean[i].style.display = "block";
  }
  e.target.style.backgroundColor = "white";
  e.target.textContent = "Mean yes";
}




// Button: Nice yes
// Add event listeners for "Nice yes" button
const nice_yes = document.querySelector("#nice_yes");
nice_yes.addEventListener("mouseover", accept);
nice_yes.addEventListener("mouseout", redact_accept);
nice_yes.addEventListener("click", redirect_play);

// Select all the buttons that we want to fade away when we mouse over the nice_yes button
const to_fade_nice = document.querySelectorAll(".fade_nice");


// Fade out all buttons except for the nice_yes button
function accept (e) {
  for (let i = 0; i < to_fade_nice.length; i++) {
    to_fade_nice[i].style.display = "none";
  }

  // Modify the nice_yes button
  e.target.style.backgroundColor = "lightGreen";
  e.target.textContent = "Yes, I'd love to play!";
}


// Fade back in all the buttons faded out by nice_yes
function redact_accept (e) {
  for (let i = 0; i < to_fade_nice.length; i++) {
    to_fade_nice[i].style.display ="block";
  }
  e.target.style.backgroundColor = "white";
  e.target.textContent = "Nice yes";
}




// Button: No, please take me somewhere safe. (Rickroll button)
const somewhere_safe = document.querySelector(".no");
const cowards = document.querySelectorAll(".coward");

// Add event listeners to rickroll button
somewhere_safe.addEventListener("mouseover", run_away);
somewhere_safe.addEventListener("mouseout", stand_ground);
somewhere_safe.addEventListener("click", redirect_rickroll);


// Fade out all buttons except for the rickroll button
function run_away (e) {
  for (let i = 0; i < cowards.length; i++) {
    cowards[i].style.opacity = 0;
  }

  // Modify the rickroll button
  e.target.style.backgroundColor = "red";
}


// Fade back in all the buttons faded out by rickroll button
function stand_ground (e) {
  for (let i = 0; i < cowards.length; i++) {
    cowards[i].style.opacity = 1;
  }
  e.target.style.backgroundColor = "white";
}





// Redirections
// Rickroll user
function redirect_rickroll (e) {
  location.href = "https://www.youtube.com/watch?v=H8ZH_mkfPUY"
}


// Redirect player to rock-paper-scissors game
function redirect_play(e) {
  location.href = "/rock-paper-scissors/html-files/rps.html";
}