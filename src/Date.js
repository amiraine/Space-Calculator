class Calc {
  constructor(year, month, day, hour, minute, second) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second  = second;
  }

  inSeconds(year) {
    let secondsValue;
    secondsValue = this.year * 365 * 60 * 60;
    return secondsValue
  }
  
}

export { Class };
