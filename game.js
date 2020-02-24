// Rock, paper, scissors game
function start() { 
    var playerOne = prompt("Write rock, paper or scissors:");
    
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
        function game(playerOne) {
            var x = Math.round(Math.random() * 10); // getting a random number between 1 and 10
            // if 0-3 = rock
            // if 4-6 = paper
            // if 7-10 = scissors
            if (x <= 3) {
                var machinePlayer = "rock";
                if (playerOne === "paper") {
                    alert(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                } else if (playerOne === "scissors") {
                    alert(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                } else if (playerOne === machinePlayer) {
                    alert(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                }
            } else if (x <= 6) {
                var machinePlayer = "paper";
                if (playerOne === "rock") {
                    alert(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                } else if (playerOne === "scissors") {
                    alert(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                } else if (playerOne === machinePlayer) {
                    alert(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                }
            } else {
                var machinePlayer = "scissors";
                if (playerOne === "rock") {
                    alert(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                } else if (playerOne === "paper") {
                    alert(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                } else if (playerOne === machinePlayer) {
                    alert(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
                    start();
                }
                
            }
        }
        
        game(playerOne);
    
    } else {
        alert("Please write rock, paper or scissors");
        start();
    }

}    
start();
