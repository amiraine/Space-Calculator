class Age {
  constructor(age) {
    this.age = age;
  }
  inSeconds() {
    let secondsValue;
    secondsValue = this.age * 365 * 24 * 60 * 60;
    return secondsValue
  }
  inMercury(){
    let mercuryValue;
    mercuryValue = this.age * 0.24;
    return mercuryValue
  }
}

export { Age };
