"use strict";
var playerOne = {score : 0}
var playerTwo = {score : 0}
var playerThree = {score : 0}
var playerFour = {score : 0}
var playerFive = {score : 0}
var playerSix = {score : 0}
var playerSeven = {score : 0}
var playerEight = {score : 0}
var playerNine = {score : 0}
var playerTen = {score : 0}

var players = [{playerOne},{playerTwo},{playerThree},{playerFour},{playerFive},{playerSix},{playerSeven},{playerEight},{playerNine},{playerTen}]

function rollDice(){
    let diceRolls = [Math.floor((Math.random() * 4) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 8) + 1), Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 20) + 1)]
    if(document.getElementById("4").innerHTML == 0){
        document.getElementById("4").innerHTML = diceRolls[0];
        document.getElementById("6").innerHTML = diceRolls[1];
        document.getElementById("8").innerHTML = diceRolls[2];
        document.getElementById("10").innerHTML = diceRolls[3];
        document.getElementById("12").innerHTML = diceRolls[4];
        document.getElementById("20").innerHTML = diceRolls[5];
    }
    let sumOfRolls = diceRolls.reduce((a, b) => a + b, 0)
    return sumOfRolls;
}
function rollTwenty(){
    let shootOutRolls = [Math.floor((Math.random() * 20) + 1),Math.floor((Math.random() * 20) + 1),Math.floor((Math.random() * 20) + 1),Math.floor((Math.random() * 20) + 1)];
    let finalRoll = shootOutRolls[Math.floor(Math.random() * shootOutRolls.length)]
    return finalRoll;
}
function commenceRound(){
    if(players.length > 4){
        let i;
        for (i = 0; i < players.length; i++){
            players[i].score = rollDice();
        }
        removePlayer();
        removePlayer();
    }
    if(players.length <= 4 && players.length > 2){
        let i;
        for (i = 0; i < players.length; i++){
            players[i].score = rollDice();
        }
        removePlayer();
    }
    else{
        let i;
        for (i = 0; i < players.length; i++){
            players[i].score = rollTwenty();
            removePlayer();
        }
    }
}
function removePlayer(){
    let lowestPlayer = Math.min(players);
    players = players.splice(players.indexOf(lowestPlayer));
    return players;
}
function runGame(){
    commenceRound();
}