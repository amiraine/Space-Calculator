import { Age } from './Age.js';
import { DoB } from './DoB.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
//declare globals
const date = new Date();
const yearNow = date.getFullYear();
const monthNow = date.getMonth();
const dayNow = date.getDate();
//declare input variables
let yearInput;
let monthInput;
let dayInput;
let raceInput;
let ageIn;
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    //get values from form
    yearInput = $(".yearIn").val();
    monthInput = $(".monthIn").val();
    dayInput = $(".dayIn").val();
    raceInput = $(".race").val();
    ageIn = 2018 - yearInput;
    const newUser = new Age(ageIn);
    const newDateOf = new DoB(yearInput,monthInput,dayInput);
    //calculate values
    const secoAge = newUser.inSeconds();
    const secSpec = newDateOf.differenceSec(yearNow,monthNow,dayNow);
    const mercAge = newUser.inMercury();
    const venuAge = newUser.inVenus();
    const marsAge = newUser.inMars();
    const jupiAge = newUser.inJupiter();
    const lifeExpDiff = newUser.lifeExpect(raceInput);
    //add text to html Output
    $('#earth-age').text(ageIn);
    $('#age-in-sec').text(secoAge);
    $('#age-in-dob').text(secSpec);
    $('#merc-age').text(mercAge);
    $('#venu-age').text(venuAge);
    $('#mars-age').text(marsAge);
    $('#jupi-age').text(jupiAge);
    $('#life-span').text(raceInput);
    $('#life-expect-return').text(lifeExpDiff);
    //
    $(".cardTwo").slideDown();
    $(".cardOne").slideUp();
  });
});
