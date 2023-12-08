const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const errorMsg = document.querySelectorAll(".error");
let output = document.querySelectorAll("main > h2 > .colorize");

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const today = new Date();

let currentDate = today.getDate();
let currentMonth = 1 + today.getMonth();
let currentYear = today.getFullYear();

let birthDate, birthMonth, birthYear;

function validateDay() {
  if (dayInput.value.length == 0) {
    errorMsg[0].innerHTML = "this field is required";
    inputs[0].style.borderColor = "var(--Light-red)";
    labels[0].style.color = "var(--Light-red)";
    return false;
  } else if (dayInput.value.length >= 3) {
    errorMsg[0].innerHTML = "invalid";
    inputs[0].style.borderColor = "var(--Light-red)";
    labels[0].style.color = "var(--Light-red)";
    return false;
  } else if (dayInput.value > 31) {
    errorMsg[0].innerHTML = "error!";
    inputs[0].style.borderColor = "var(--Light-red)";
    labels[0].style.color = "var(--Light-red)";
    return false;
  } else if (dayInput.value.length > 0) {
    errorMsg[0].innerHTML = " ";
    inputs[0].style.borderColor = "green";
    labels[0].style.color = "green";
  }
}

function validateMonth() {
  if (monthInput.value.length == 0) {
    errorMsg[1].innerHTML = "this field is required";
    inputs[1].style.borderColor = "var(--Light-red)";
    labels[1].style.color = "var(--Light-red)";
    return false;
  } else if (monthInput.value.length >= 3) {
    errorMsg[1].innerHTML = "invalid";
    inputs[1].style.borderColor = "var(--Light-red)";
    labels[1].style.color = "var(--Light-red)";
    return false;
  } else if (monthInput.value > 12) {
    errorMsg[1].innerHTML = "must be a valid month!";
    inputs[1].style.borderColor = "var(--Light-red)";
    labels[1].style.color = "var(--Light-red)";
    return false;
  } else if (monthInput.value.length > 0) {
    errorMsg[1].innerHTML = " ";
    inputs[1].style.borderColor = "green";
    labels[1].style.color = "green";
  }
}

function validateYear() {
  if (yearInput.value.length == 0) {
    errorMsg[2].innerHTML = "this field is required";
    inputs[2].style.borderColor = "var(--Light-red)";
    labels[2].style.color = "var(--Light-red)";
    return false;
  }
  if (yearInput.value.length < 4) {
    errorMsg[2].innerHTML = "invalid";
    inputs[2].style.borderColor = "var(--Light-red)";
    labels[2].style.color = "var(--Light-red)";
    return false;
  } else if (yearInput.value > currentYear) {
    errorMsg[2].innerHTML = "must be in the past!";
    inputs[2].style.borderColor = "var(--Light-red)";
    labels[2].style.color = "var(--Light-red)";
    return false;
  } else if (yearInput.value.length > 0) {
    errorMsg[2].innerHTML = " ";
    inputs[2].style.borderColor = "green";
    labels[2].style.color = "green";
  }
}

function leapChecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}

leapChecker(currentYear);

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (
    dayInput.value.length == 0 &&
    monthInput.value.length == 0 &&
    yearInput.value.length == 0
  ) {
    inputs.forEach((input) => {
      const parent = input.parentElement;
      input.style.borderColor = "var(--Light-red)";
      parent.querySelector(".error").innerHTML = "this field is required";
    });
    labels.forEach((label) => {
      label.style.color = "var(--Light-red)";
    });
    return false;
  } else if (dayInput.value.length == 0) {
    errorMsg[0].innerHTML = "this field is required";
    inputs[0].style.borderColor = "var(--Light-red)";
    labels[0].style.color = "var(--Light-red)";
    return false;
  } else if (monthInput.value.length == 0) {
    errorMsg[1].innerHTML = "this field is required";
    inputs[1].style.borderColor = "var(--Light-red)";
    labels[1].style.color = "var(--Light-red)";
    return false;
  } else if (yearInput.value.length == 0) {
    errorMsg[2].innerHTML = "this field is required";
    inputs[2].style.borderColor = "var(--Light-red)";
    labels[2].style.color = "var(--Light-red)";
    return false;
  } else if (dayInput.value > months[(3, 5, 8, 10)]) {
    errorMsg[0].innerHTML = "error!";
    inputs[0].style.borderColor = "var(--Light-red)";
    labels[0].style.color = "var(--Light-red)";
    return false;
  }

  if (monthInput.value > currentMonth) {
    currentMonth = 12 + currentMonth;
    currentYear--;
  }

  if (dayInput.value > currentDate) {
    currentDate = currentDate + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  birthYear = currentYear - yearInput.value;
  birthMonth = currentMonth - monthInput.value;
  birthDate = currentDate - dayInput.value;

  if (birthMonth <= 0) {
    birthMonth = 11;
  }

  let interval = 1000;

  let startValue = 0;
  let endValue = birthYear;
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    output[0].textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);

  let startValueTwo = 0;
  let endValueTwo = birthMonth;
  let secondDuration = Math.floor(interval / endValueTwo);
  let secondCounter = setInterval(function () {
    startValueTwo += 1;
    output[1].textContent = startValueTwo;
    if (startValueTwo == endValueTwo) {
      clearInterval(secondCounter);
    }
  }, secondDuration);

  let startValueThree = 0;
  let endValueThree = birthDate;
  let thirdDuration = Math.floor(interval / endValueThree);
  let thirdCounter = setInterval(function () {
    startValueThree += 1;
    output[2].textContent = startValueThree;
    if (startValueThree == endValueThree) {
      clearInterval(thirdCounter);
    }
  }, thirdDuration);
}
