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
let newUser;
let newDateOf;
let secoAge;
let secSpec;
let mercAge;
let venuAge;
let marsAge;
let jupiAge;
let lifeExpDiff;
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    //get values from form
    yearInput = $(".yearIn").val();
    monthInput = $(".monthIn").val();
    dayInput = $(".dayIn").val();
    raceInput = $(".race").val();
    ageIn = 2018 - yearInput;
    newUser = new Age(ageIn);
    newDateOf = new DoB(yearInput,monthInput,dayInput);
    //calculate values
    secoAge = newUser.inSeconds();
    secSpec = newDateOf.differenceSec(yearNow,monthNow,dayNow);
    mercAge = newUser.inMercury();
    venuAge = newUser.inVenus().toFixed(2);
    marsAge = newUser.inMars();
    jupiAge = newUser.inJupiter();
    lifeExpDiff = newUser.lifeExpect(raceInput);
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
    $(".cardMiddle").slideDown();
    $(".cardTwo").slideDown();
    $(".cardOne").slideUp();
  }); // adds text to results
  $("img#earthResult").on('click',function(){
    $('#results').show();
    $('#earth').fadeIn(500);
    $('#yearsec').fadeIn(500);
  }); //shows earth result on clicking the earth icon
  $("img#mercuryResult").on('click',function(){
    $('#results').show();
    $('#mercury').fadeIn(500);
  });
  $("img#venusResult").on('click',function(){
    $('#results').show();
    $('#venus').fadeIn(500);
  });
  $("img#marsResult").on('click',function(){
    $('#results').show();
    $('#mars').fadeIn(500);
  });
  $("img#jupiterResult").on('click',function(){
    $('#results').show();
    $('#jupiter').fadeIn(500);
  });
  $("img#deathResult").on('click',function(){
    $('#results').show();
    $('#lifeexp').fadeIn(500);
  });
  $("img#everythingResult").on('click',function(){
    $('#results').show();
    $('#earth').show();
    $('#yearsec').show();
    $('#mercury').show();
    $('#venus').show();
    $('#mars').show();
    $('#jupiter').show();
    $('#lifeexp').show();
  });
});
