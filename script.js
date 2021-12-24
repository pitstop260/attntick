"use strict";

const images = document.querySelector(".svgs");
const arrow = document.querySelector(".arrows");
let i = 1;
const aboutText = document.querySelector(".about");
const about = [
  `"By using our app you can take attendance on the go."`,
  `"By using our app you can save time,paper and forests."`,
];

arrow.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("fa-arrow-left") ||
    e.target.classList.contains("arrow-left")
  ) {
    --i;
    if (!i) i = 1;
    images.src = `images/svg${i}.svg`;
    aboutText.textContent = about[i - 1];
  }

  if (
    e.target.classList.contains("fa-arrow-right") ||
    e.target.classList.contains("arrow-right")
  ) {
    ++i;
    if (i > 2) i = 2;
    images.src = `images/svg${i}.svg`;
    aboutText.textContent = about[i - 1];
  }
});

