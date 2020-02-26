"use strict";

function rollDice(){
    let fourSideDice = Math.floor((Math.random() * 4) + 1);
    let sixSideDice = Math.floor((Math.random() * 6) + 1);
    let eightSideDice = Math.floor((Math.random() * 8) + 1);
    let tenSideDice = Math.floor((Math.random() * 10) + 1);
    let twelveSideDice = Math.floor((Math.random() * 12) + 1);
    let twentySideDice = Math.floor((Math.random() * 20) + 1);
    var sumOfDice = fourSideDice + sixSideDice + eightSideDice + tenSideDice + twelveSideDice + twentySideDice;
}