export class FormValidator {
  constructor(minutesInput, secondsInput) {
    this.valid = false;
    this.minutesInput = minutesInput;
    this.secondsInput = secondsInput;
  }

  validateForm() {
    this.minutesValue = parseInt(minutesInput.value);
    this.secondsValue = parseInt(secondsInput.value);

    if (
      (isNaN(this.minutesValue) || isNaN(this.secondsValue)) ||
      (this.minutesValue < 0 || this.secondsValue < 0) ||
      (this.secondsValue === 0 && this.minutesValue === 0)
    )
      this.valid = false;
    else this.valid = true;
  }
}
