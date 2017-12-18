$(document).ready(function() {

// let player = {
//   health: 100,
//   attack: 20,
// }
//
// let opponent = {
//   health: 100,
//   attack: 20,
// }
//
// const attack = function() {
//   opponent.health -= player.attack;
//   player.health -= opponent.attack;
//   printToScreen();
// }
//
// const printToScreen = function() {
//   $("#enemy").html(opponent.health);
//   $("#userChar").html(player.health);
// }
//
// printToScreen();


let characters = {
  // VARIABLES
  'r2d2': {
    name: "R2-D2",
    hp: 90,
    ap: 15,
    imageUrl: "assets/images/r2d2.png"
  },
  'bb8': {
    name: "BB-8",
    hp: 95,
    ap: 10,
    imageUrl: "assets/images/bb8.png"
  },
  'droid': {
    name: "Battle Droid",
    hp: 100,
    ap: 15,
    imageUrl: "assets/images/droid.png"
  },
  'bb9e': {
    name: "BB-9E",
    hp: 120,
    ap: 20,
    imageUrl: "assets/images/bb9e.png"
  }
};

var wins: 0;
var loses: 0;

var charStage = function() {
  var charDiv = $('#staging').add('div').attr("value", characters.name);
  var charName = $('<div>').text(characters.name);
  var charImg = $('<img>').attr('src', characters.imageUrl);
  var charHP = $('<div>').text(characters.hp);
  charDiv.append(charName).append(charImg).append(charHP);

}





}
