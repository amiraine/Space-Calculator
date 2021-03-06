class Age {
  constructor(age) {
    this.age = age;
  }
  inSeconds() {
    let secondsValue;
    secondsValue = this.age * 365 * 24 * 60 * 60;
    return secondsValue;
  }
  inMercury(){
    let mercuryValue;
    mercuryValue = this.age * 0.24;
    return mercuryValue;
  }
  inVenus(){
    let venusValue;
    venusValue = this.age * 0.62;
    return venusValue;
  }
  inMars(){
    let marsValue;
    marsValue = this.age * 1.88;
    return marsValue;
  }
  inJupiter(){
    let jupiterValue;
    jupiterValue = this.age * 11.86;
    return jupiterValue;
  }
  lifeExpect(expYear){
    let lifeLeft;
    lifeLeft = expYear - this.age;
    if (lifeLeft > 0) {
      return "you have " + lifeLeft + " years remaining.";
    } else if (lifeLeft < 0) {
      return "you've exceeded your life expectancy by " + Math.abs(lifeLeft) + " years.";
    }
  }
}

export { Age };
