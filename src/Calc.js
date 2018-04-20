class Calc {
  constructor(age, year, month, day, hour, minute, second) {
    this.age = 0;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second  = second;
  }

  inSeconds() {
    let secondsValue;
    secondsValue = this.age * 365 * 24 * 60 * 60;
    return secondsValue
  }
}

export { Calc };
