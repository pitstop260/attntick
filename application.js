"use strict";

const students = new Map([
  [1, ["PAVAN", "2SD19EC001"]],
  [2, ["ANIRUDH", "2SD19EC111"]],
  [3, ["akshay", "2SD19EC111"]],
  [4, ["sudeep", "2SD19EC111"]],
  [5, ["kiran", "2SD19EC111"]],
]);

const days = ["MONDAY", "THURSDAY", "FRIDAY"];

const names = (i) => `<div>
<p>${students.get(i)[0].toUpperCase()}<p></div>`;
const usns = (i) => `<div>
<p>${students.get(i)[1]}<p></div>`;
const checkboxes = `<div class="flexer"><input type="checkbox" id="checkbox" class="check" name="" value=""><p class="a_p">A</p></div>`;
const daysAdder = (j) =>
  `<div class="checkboxes"><p class="days" id="days">${days[j]}</p></div>`;

const namesAdder = document.getElementById("names");
const usnAdder = document.getElementById("usn");
const adjust = document.getElementById("adjust");
const lockAdder = (i) => `<i class="fas fa-${i ? "" : "un"}lock"></i>`;

for (let i = 0; i < students.size; i++) {
  namesAdder.insertAdjacentHTML("beforeend", names(i + 1));
  usnAdder.insertAdjacentHTML("beforeend", usns(i + 1));
}

const now = new Date();
const options = { weekday: "long" };
const today = new Intl.DateTimeFormat("en-US", options).format(now);

for (let j = 0; j < days.length; j++) {
  adjust.insertAdjacentHTML("beforeend", daysAdder(j));
}
const insertLock = document.querySelectorAll(".days");
for (let j = 0; j < days.length; j++) {
  if (
    document.querySelectorAll(".days")[j].textContent !== today.toUpperCase()
  ) {
    document.querySelectorAll(".checkboxes")[j].style.color = "gray";
    insertLock[j].insertAdjacentHTML("afterend", lockAdder(1));
  } else {
    insertLock[j].insertAdjacentHTML("afterend", lockAdder(0));
  }
}

const checkboxAdder = document.querySelectorAll(".checkboxes");
for (let j = 0; j < days.length; j++) {
  for (let k = 0; k < students.size; k++) {
    checkboxAdder[j].insertAdjacentHTML("beforeend", checkboxes);
  }
}

const absentPresent = Array.from(document.querySelectorAll(".check"));
const para = document.querySelectorAll(".a_p");
const flexer = Array.from(document.querySelectorAll(".flexer"));

const dayParent = Array.from(document.querySelectorAll(".checkboxes"));

console.log(dayParent);

dayParent.forEach((el, i) =>
  el.addEventListener("click", function (e) {
    console.log(
      e.target.parentNode.parentNode.childNodes[0].textContent !== today
    );
    if (
      e.target.parentNode.parentNode.childNodes[0].textContent !==
      today.toUpperCase()
    ) {
      // e.target.classList.remove("check");
      e.preventDefault();
    }
  })
);

flexer.forEach((el) =>
  el.addEventListener("click", function (e) {
    if (e.target.classList.contains("check") && e.target.checked) {
      e.target.parentNode.childNodes[1].textContent = "P";
    } else {
      if (e.target === el) return;
      e.target.parentNode.childNodes[1].textContent = "A";
    }
  })
);

const lock = document.querySelector(".fa-unlock");

lock.addEventListener("click", function () {
  if (lock.classList.contains("fa-unlock")) {
    lock.classList.add("fa-lock");
    lock.classList.remove("fa-unlock");
  } else {
    lock.classList.add("fa-unlock");
    lock.classList.remove("fa-lock");
  }
});

const check = document.querySelector(".check");
console.log(check);

// if(){

// }
