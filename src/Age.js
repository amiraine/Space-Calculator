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
  inVenus(){
    let venusValue;
    venusValue = this.age * 0.62;
    return venusValue
  }
  inMars(){
    let marsValue;
    marsValue = this.age * 1.88;
    return marsValue
  }
  inJupiter(){
    let jupiterValue;
    jupiterValue = this.age * 11.86;
    return jupiterValue
  }
}

export { Age };
