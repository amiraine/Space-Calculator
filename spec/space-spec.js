import { Age } from "./../src/Age.js";
import { DoB } from "./../src/DoB.js";

describe('Age', function() {
  let newAge;
  let lifeExpectTest;
//reset variables
  beforeEach(function() {
    newAge = new Age(1);
    lifeExpectTest = new Age(24);
  });
//tests
  it('should return age converted to seconds', function(){
    expect(newAge.inSeconds()).toEqual(31536000);
  });
  it('should return age converted to Mercury years', function(){
    expect(newAge.inMercury()).toEqual(0.24);
  });
  it('should return age converted to Venus years', function(){
    expect(newAge.inVenus()).toEqual(0.62);
  });
  it('should return age converted to Mars years', function(){
    expect(newAge.inMars()).toEqual(1.88);
  });
  it('should return age converted to Jupiter years', function(){
    expect(newAge.inJupiter()).toEqual(11.86);
  });
  it('should return difference in current age and your life expectancy with \'years remaining\' message if your age is less than expectancy', function(){
    expect(lifeExpectTest.lifeExpect(88)).toEqual("You have 64 years remaining.");
  });
  it('should return difference in current age and your life expectancy with \'years exceeded\' message if your age is greater than expectancy', function(){
    console.log(lifeExpectTest.lifeExpect(20));
    expect(lifeExpectTest.lifeExpect(20)).toEqual("You've exceeded your life expectancy by 4 years.");
  });
});
//specs 1-5 passed

describe('DoB', function(){
  let todaysDate;
  let newDoB;
  beforeEach(function(){
    newDoB = new DoB(2017,4,20);
    todaysDate = new Date(2018,4,20);
  });
//tests
  it('should return difference between today\'s date and a given birth date in seconds', function(){
    let thisYear = todaysDate.getFullYear();
    let thisMonth = todaysDate.getMonth();
    let thisDay = todaysDate.getDate();
    expect(newDoB.differenceSec(thisYear,thisMonth,thisDay)).toEqual(31536000);
  });
});
