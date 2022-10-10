"use strict";

// array of all inputs
const inputs = document.getElementsByTagName("input");
// submit button
const submit = document.getElementById("submit-btn");

submit.addEventListener("click", function (evt) {
  evt.preventDefault();

  for (let input of inputs) {
    if (input.value.trim().length === 0) {
      input.classList.add("outline-red");
      input.placeholder = "";
      input.nextElementSibling.classList.remove("hidden");
    }
  }
});
