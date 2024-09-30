"use strict";
/*
PSEUDOCODE
1 When the user click the right button, it should change to next profile
but in order
2 Similarly when they click left button it should display the previos profile in order
3 When they click the suprise me button it should display random profile
*/
let order = 1;
// Selecting elements
const forwardButton = document.querySelector(".forward");
const backwardButton = document.querySelector(".backward");
const profilePhoto = document.querySelector(".profile");
const reviewer = document.querySelector(".name");
const job = document.querySelector(".job");
const intro = document.querySelector(".intro");
const supriseButton = document.querySelector(".surprise");
// Fumctions
const cole = function () {
  reviewer.innerHTML = "Cole Sprouse";
  job.innerHTML = "SCIENTIST";
  intro.innerHTML =
    "Hi, I'm Cole, a scientist with a passion for research and innovation. I specialize in data analysis and algorithms, always exploring new ways to solve complex problems and push the boundaries of technology.";
};
const tanjiro = function () {
  reviewer.innerHTML = "Tanjiro";
  job.innerHTML = "DESIGNER";
  intro.innerHTML =
    "Hi, I'm Tanjiro, a designer with a keen eye for detail and a passion for creating visually stunning and user-friendly experiences. I specialize in crafting innovative designs that blend aesthetics with functionality.";
};
const timothee = function () {
  reviewer.innerHTML = "Timothée";
  job.innerHTML = "INTERN";
  intro.innerHTML =
    "Hi, I'm Timothee, a software engineer interning at Google with a focus on front-end development. I have a strong background in Data Structures and Algorithms";
};
const displayProfile = function () {
  profilePhoto.src = `./img/${order}.jpeg`;
};
// ForwardButton
forwardButton.addEventListener("click", function () {
  order++;
  displayProfile();
  switch (order) {
    case 2:
      cole();
      break;
    case 3:
      tanjiro();
      break;
    default:
      order = 1;
      displayProfile();
      timothee();
  }
});
// BackwardButton
backwardButton.addEventListener("click", function () {
  order--;
  displayProfile();
  switch (order) {
    case 2:
      cole();
      break;
    case 1:
      timothee();
      break;
    default:
      order = 3;
      displayProfile();
      tanjiro();
  }
});
// SupriseButton
supriseButton.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  order = randomNumber;
  displayProfile();
  switch (order) {
    case 2:
      cole();
      break;
    case 1:
      timothee();
      break;
    default:
      order = 3;
      displayProfile();
      tanjiro();
  }
});
