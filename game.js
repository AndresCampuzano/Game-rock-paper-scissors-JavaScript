// Rock, paper, scissors game

//getting id from HTML
document.getElementById("rock").addEventListener("click", rockFunction);
document.getElementById("paper").addEventListener("click", paperFunction);
document.getElementById("scissors").addEventListener("click", scissorsFunction);

//turning id in strings
function rockFunction() {
    var playerOne = "rock";
    return game(playerOne);
}
function paperFunction() {
    var playerOne = "paper";
    return game(playerOne);
}
function scissorsFunction() {
    var playerOne = "scissors";
    return game(playerOne);
}

function game(playerOne) {
    var x = Math.round(Math.random() * 8); // getting a random number between 0 and 8
    // if 0-2 = rock
    // if 3-5 = paper
    // if 6-8 = scissors
    if (x <= 2) {
        var machinePlayer = "rock";
        if (playerOne === "paper") {
            console.log(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        } else if (playerOne === "scissors") {
            console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        } else if (playerOne === machinePlayer) {
            console.log(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        }
    } else if (x <= 5) {
        var machinePlayer = "paper";
        if (playerOne === "rock") {
            console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        } else if (playerOne === "scissors") {
            console.log(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        } else if (playerOne === machinePlayer) {
            console.log(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        }
    } else {
        var machinePlayer = "scissors";
        if (playerOne === "rock") {
            console.log(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        } else if (playerOne === "paper") {
            console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        } else if (playerOne === machinePlayer) {
            console.log(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
            // start();
        }
    }
} 
