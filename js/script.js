"use strict";

import { FormValidator } from "./formValidator.js";
import { Timer } from "./timer.js";

const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");

const startTimerButton = document.querySelector(".btn-start-timer");
const resetTimerButton = document.querySelector(".btn-reset-timer");
const timerContainer = document.querySelector("#timer__output");

const timerRingtone = document.querySelector("#timerRingtone");

const formValidator = new FormValidator(minutesInput, secondsInput);
const timer = new Timer(
  timerAlertHandler,
  playAlarmAudio,
  startTimerButton,
  resetTimerButton
);

function timerAlertHandler(message) {
  timerContainer.innerHTML = message;
}

function playAlarmAudio() {
  timerRingtone.play();
  setTimeout(() => {
    timerRingtone.pause();
  }, 8000);
}

startTimerButton.addEventListener("click", (e) => {
  formValidator.validateForm();
  if (formValidator.valid) {
    timer.enableStartButton(false);
    timerAlertHandler("Countdown has started!");
    window.location.href = "#timer__output";
    setTimeout(() => {
      timer.startTimer(formValidator.minutesValue, formValidator.secondsValue);
    }, 300);
  } else {
    timerAlertHandler("Please try to enter correct values!");
  }
});

resetTimerButton.addEventListener("click", (e) => {
  clearInterval(timer.countdown);
  timer.enableStartButton(true);
  minutesInput.value = secondsInput.value = 0;
  timerAlertHandler(timer.timerOutputDefaultValue);
});
