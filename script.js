"use strict";

const currentNumber = document.getElementById("number");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const minBtn = document.getElementById("min");

let newNum;
addBtn.addEventListener("click", function () {
  newNum = Number(currentNumber.innerHTML) + 1;
  currentNumber.innerHTML = newNum;
});

resetBtn.addEventListener("click", function () {
  currentNumber.innerHTML = 0;
});

minBtn.addEventListener("click", function () {
  newNum = Number(currentNumber.innerHTML) - 1;
  currentNumber.innerHTML = newNum;
});
