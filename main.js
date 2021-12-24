"use strict";

// Functions
// This function capitalizes first letter of any string passed to it
const capitalizeName = function (name) {
  const names = name.split(" ");

  return names[0][0].toUpperCase() + names[0].slice(1);
};

// This function displays cards depending on which user has logged in
const cardStr = (i) => `<div class="cards">
    <span>${classes.get(login)[i]}</span>
    <div class="adjust">
      <div class="extra-info">
        <div>Total students: ${""}</div>
        <div>Class starts at: ${""}</div>
      </div>
    </div>
</div>`;

// this function returns a random no.
const randomize = (length) => Math.trunc(Math.random() * length + 1);

// Variables
const mainH2 = document.getElementById("full__window");
const mainH1 = document.getElementById("skip");

// Classes taken by teachers in odd semester
const teacherNames = new Map([
  [1, "Akshay Koti"],
  [2, "Kiran C.B"],
]);
const classes = new Map([
  [1, ["3rd A", "5th A", "5th B"]],
  [2, ["3rd A", "5th B", "7th B"]],
]);
const login = randomize(teacherNames.size);
console.log(login);
const welcome = `<h1>Welcome! ${capitalizeName(teacherNames.get(login))}</h1>`;

// create cards of classes the teacher is assigned
if (login) {
  mainH1.insertAdjacentHTML("beforebegin", welcome);
  for (let i = 0; i < classes.get(login).length; i++) {
    mainH2.insertAdjacentHTML("beforeend", cardStr(i));
  }
  const cards = document.querySelector("#full__window");
  cards.addEventListener("click", function (e) {
    if (e.target.classList.contains("cards")) {
      // e.preventDefault();
      window.open("application.html", "_parent");
      console.log(1);
    }
  });
}
