import { Age } from "./../src/Age.js";

describe('Age', function() {
  let todaysDate;
  let testBirthday;
  let newAge;

  beforeEach(function() {
    todaysDate = new Date();
    testBirthday = new Date(24,1994,0,1);
    newAge = new Age(1);
  });

  it('should return age converted to seconds', function(){
    expect(newAge.inSeconds()).toEqual(31536000);
    console.log(newAge.age);
  });
  it('should return age converted to Mercury years', function(){
    expect(newAge.inMercury()).toEqual(0.24);
  });
});
