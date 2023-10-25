export class Timer {
  timerOutputDefaultValue = "Your timer's countdown will go here...";
  duration = 0;
  countdown;

  constructor(timerAlertHandler, startTimerButton, resetTimerButton) {
    this.timerAlertHandler = timerAlertHandler;
    this.timerAlertHandler(this.timerOutputDefaultValue);
    this.startTimerButton = startTimerButton;
    this.resetTimerButton = resetTimerButton;
  }
  enableStartButton(isEnabled) {
    if (isEnabled) {
      this.startTimerButton.style.display = "inline-block";
      this.resetTimerButton.style.display = "none";
    } else {
      this.startTimerButton.style.display = "none";
      this.resetTimerButton.style.display = "inline-block";
    }
  }
  startTimer(minutesValue, secondsValue) {
    this.duration = secondsValue + minutesValue * 60;
    this.updateTimer(this.duration);

    this.countdown = setInterval(() => {
      this.duration--;
      this.updateTimer(this.duration);
      if (this.duration <= 0) {
        clearInterval(this.countdown);
        this.timerAlertHandler("Your timer is up!");
        //Playing sound
        this.enableStartButton(true);
      }
    }, 1000);
  }
  updateTimer(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    this.timerAlertHandler(
      `${minutes} : ${seconds < 10 ? "0" : ""} ${seconds}`
    );
  }
}
