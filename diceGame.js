"use strict";

var players = [{playerOne},{playerTwo},{playerThree},{playerFour},{playerFive},{playerSix},{playerSeven},{playerEight},{playerNine},{playerTen}]

function rollDice(){
    let diceRolls = [Math.floor((Math.random() * 4) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 8) + 1), Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 20) + 1)].reduce((a, b) => a + b, 0)
    return diceRolls;
}
function rollTwenty(){
    let shootOutRolls = [Math.floor((Math.random() * 20) + 1),Math.floor((Math.random() * 20) + 1),Math.floor((Math.random() * 20) + 1),Math.floor((Math.random() * 20) + 1)];
    let finalRoll = shootOutRolls[Math.floor(Math.random() * shootOutRolls.length)]
    return finalRoll;
}
function tieBreaker(){

}
function commenceRound(){
    if(players.length > 4){
        let i;
        for (i = 0; i < players.length; i++){
            players[i] = rollDice();
        }
        removePlayer();
        removePlayer();
        break;
    }
    if(players.length <= 4 && players.length > 2){
        let i;
        for (i = 0; i < players.length; i++){
            players[i] = rollDice();
        }
        removePlayer();
        break;
    }
    else{
        let i;
        for (i = 0; i < players.length; i++){
            players[i] = rollTwenty();
            removePlayer();
        }
    }
}
function removePlayer(){
    let lowestPlayer = Math.min(players);
    playerOusted = players.splice(players.indexOf(lowestPlayer));
}