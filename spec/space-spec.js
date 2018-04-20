import { Class } from "./../src/class.js";

describe('Class', function() {
  let todaysDate;
  let testBirthday;

  beforeEach(function() {
    todaysDate = new Date();
    testBirthday = new Date(1994,0,1);
  });

  it('describe test', function() {
    expect(reusableObject.prop).toEqual(value);
  });
});
