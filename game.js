// Rock, paper, scissors game

const rock = "🗿";
const paper = "📜";
const scissors = "✂️";
const lizard = "🦎";
const spock = "🖖";

//getting id from HTML
document.getElementById("rock").addEventListener("click", rockFunction);
document.getElementById("paper").addEventListener("click", paperFunction);
document.getElementById("scissors").addEventListener("click", scissorsFunction);
document.getElementById("lizard").addEventListener("click", lizardFunction);
document.getElementById("spock").addEventListener("click", spockFunction);

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
function lizardFunction() {
    var playerOne = "lizard";
    return game(playerOne);
}
function spockFunction() {
    var playerOne = "spock";
    return game(playerOne);
}

//Game
function game(playerOne) {


    //Template to render in Modal
    const idToRenderModal = document.getElementById("toRenderModal")
    function template(y) {
        let templateModal = `
              <div class="modal" id="modal">
                  <h1>${y}</h1>
                <div class="modal__buttons">
                    <p>Play again</p>
                    <p>Close</p>
                </div>
              </div>
            `
        return renderModal(templateModal);
    }
    function renderModal(templateModal) {
        idToRenderModal.innerHTML = templateModal;
    }


    const x = Math.round(Math.random() * 9); // getting a random number between 0 and 9
    console.log(x);

    // 0 - 1 rock
    // 2 - 3 paper
    // 4 - 5 scissors
    // 6 - 7 lizard
    // 8 - 9 spock
    if (x === 0 || x === 1) {
        // 0 - 1 rock
        const machinePlayer = "rock";
        if (playerOne === "paper") {
            let y = `✅ you: ${paper}, machine: ${rock}, Paper covers Rock`;
            template(y);
        } else if (playerOne === "scissors") {
            let y = `❌ you: ${scissors}, machine: ${rock}, Rock crushes Scissors`;
            template(y);
        } else if (playerOne === "lizard") {
            let y = `❌ you: ${lizard}, machine: ${rock}, Rock crushes Lizard`;
            template(y);
        } else if (playerOne === "spock") {
            let y = `✅ you: ${spock}, machine: ${rock}, Spock vaporizes Rock`;
            template(y);
        } else if (playerOne === machinePlayer) {
            let y = `DRAW, you: ${rock}, machine: ${rock}`;
            console.log(y);
            template(y);
        }
    } else if (x === 2 || x === 3) {
        // 2 - 3 paper
        const machinePlayer = "paper";
        if (playerOne === "rock") {
            let y =`❌ you: ${rock}, machine: ${paper}, Paper covers Rock`;
            template(y);
        } else if (playerOne === "scissors") {
            let y =`✅ you: ${scissors}, machine: ${paper}, Scissors cuts Paper`;
            template(y);
        } else if (playerOne === machinePlayer) {
            let y =`DRAW ⚠`;
            template(y);
        }
    } else if (x === 4 || x === 5) {
        // 4 - 5 scissors
        const machinePlayer = "scissors";
        if (playerOne === "rock") {
            let y =`✅ you: ${rock}, machine: ${scissors}`;
            template(y);
        } else if (playerOne === "paper") {
            let y =`❌ you: ${paper}, machine: ${scissors}, Scissors cuts Paper`;
            template(y);
        } else if (playerOne === machinePlayer) {
            let y =`DRAW ⚠`;
            template(y);
        }
    } else if (x === 6 || x === 7) {
        // 6 - 7 lizard
        const machinePlayer = "lizard";
        console.log("Machine chose: " + machinePlayer);

        // if (playerOne === "rock") {
        //     console.log(`✅ you: ${rock}, machine: ${lizard}, Rock crushes Lizard`);
        // } else if (playerOne === "paper") {
        //     console.log(`❌ you: ${paper}, machine: ${lizard}, Lizard eats Paper`);
        // } else if (playerOne === "scissors") {
        //     console.log(`✅ you: ${scissors}, machine: ${lizard}, Scissors decapitates Lizard`);
        // } else if (playerOne === "spock") {
        //     console.log(`❌ you: ${spock}, machine: ${lizard}, Lizard poisons Spock`);
        // } else if (playerOne === machinePlayer) {
        //     console.log(`DRAW ⚠`);
        // }
    }

    else if (x === 8 || x === 9) {
        //     // 8 - 9 spock
        const machinePlayer = "spock";
        console.log("Machine chose: " +  machinePlayer);

        // if (playerOne === "rock") {
        //     console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}, Spock vaporizes Rock`);
        // } else if (playerOne === "paper") {
        //     console.log(`✅ you: ${playerOne}, machine: ${machinePlayer}, Paper disproves Spock`);
        // } else if (playerOne === "scissors") {
        //     console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}, Spock smashes Scissors`);
        // } else if (playerOne === "lizard") {
        //     console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}, Lizard poisons Spock`);
        // } else if (playerOne === machinePlayer) {
        //     console.log(`DRAW ⚠`);
        // }

    }



}


//Modal



