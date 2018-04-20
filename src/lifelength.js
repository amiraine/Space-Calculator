class Demographic{
  constructor(gender, race, lifeexpectancy){
    this.gender = gender;
    this.race = race;
    this.lifeexpectancy = lifeexpectancy;
}

//type objects
const whiteMale = new Demographic('white', 'male', 76.7)
const whiteFemale = new Demographic('white', 'female', 81.5)
const blackMale = new Demographic('black','male', 72.3)
const blackFemale = new Demographic('black', 'female', 78.5)
const asianMale = new Demographic('asian','male',84.1)
const asianFemale = new Demographic('asian', 'female',88.9)
const hispanicMale = new Demographic('hispanic', 'male',80.1)
const hispanicFemale = new Demographic('hispanic', 'female',85.4)
const nativeMale = new Demographic('native','male', 72.1)
const nativeFemale = new Demographic('native', 'female', 78.1)

export { Demographic }
