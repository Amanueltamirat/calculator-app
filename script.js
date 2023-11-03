"strict";
const screenEl = document.querySelector(".screen");
const doubleEl = document.querySelector(".double");
const btnEl = document.querySelectorAll(".calc-button");
const specialChars = ["%", "/", "*", "+", "-", "="];
let output = "";

btnEl.forEach((el) => {
  el.addEventListener("click", function (e) {
    calculator(e.target.value);
  });
});

function calculator(btnValue) {
  // console.log(btnValue);
  if (btnValue === "=" && btnValue !== "") {
    output = eval(output);
    console.log(output);
  } else if (btnValue === "c") {
    output = "";
  } else if (btnValue === "<-") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  console.log(output);
  screenEl.innerHTML = output;
}

console.log(eval(3 / 2));
