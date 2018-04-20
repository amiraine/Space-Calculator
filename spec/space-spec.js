import { Age } from "./../src/Age.js";

describe('Age', function() {
  let todaysDate;
  let newAge;
  //reset variables
  beforeEach(function() {
    todaysDate = new Date();
    newAge = new Age(1);
  });
  //tests
  it('should return age converted to seconds', function(){
    expect(newAge.inSeconds()).toEqual(31536000);
    console.log(newAge.age);
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
});
//specs 1-5 passed
