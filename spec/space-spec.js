import { Calc } from "./../src/Calc.js";

describe('Calc', function() {
  let todaysDate;
  let testBirthday;
  let newCalc;

  beforeEach(function() {
    todaysDate = new Date();
    testBirthday = new Date(24,1994,0,1);
    newCalc = new Calc(1)
  });

  it('should return age converted to seconds', function(){
    expect(newCalc.inSeconds()).toEqual(31536000);
    console.log(newCalc.age);
  });
  // it('describe test', function() {
  //   expect(reusableObject.prop).toEqual(value);
  // });
});
