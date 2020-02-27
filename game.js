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
        console.log(y);
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
    // console.log(x);

    // 0 - 1 rock
    // 2 - 3 paper
    // 4 - 5 scissors
    // 6 - 7 lizard
    // 8 - 9 spock
    if (x === 0 || x === 1) {
        const machinePlayer = "rock";
        // 0 - 1 rock
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
            template(y);
        }
    } else if (x === 2 || x === 3) {
        const machinePlayer = "paper";
        // 2 - 3 paper
        if (playerOne === "rock") {
            let y = `❌ you: ${rock}, machine: ${paper}, Paper covers Rock`;
            template(y);
        } else if (playerOne === "scissors") {
            let y = `✅ you: ${scissors}, machine: ${paper}, Scissors cuts Paper`;
            template(y);
        } else if (playerOne === "lizard") {
            let y = `✅ you: ${lizard}, machine: ${paper}, Lizard eats Paper`;
            template(y);
        } else if (playerOne === "spock") {
            let y = `❌ you: ${spock}, machine: ${paper}, Paper disproves Spock (I don't know why)`;
            template(y);
        } else if (playerOne === machinePlayer) {
            let y = `DRAW, you: ${paper}, machine: ${paper}`;
            template(y);
        }
    } else if (x === 4 || x === 5) {
        const machinePlayer = "scissors";
        // 4 - 5 scissors
        if (playerOne === "rock") {
            let y = `✅ you: ${rock}, machine: ${scissors}, Rock crushes Scissors`;
            template(y);
        } else if (playerOne === "paper") {
            let y = `❌ you: ${paper}, machine: ${scissors}, Scissors cuts Paper`;
            template(y);
        } else if (playerOne === "lizard") {
            let y = `❌ you: ${lizard}, machine: ${scissors}, Scissors decapitates Lizard`;
            template(y);
        } else if (playerOne === "spock") {
            let y = `✅ you: ${spock}, machine: ${scissors}, Spock smashes Scissors`;
            template(y);
        } else if (playerOne === machinePlayer) {
            let y = `DRAW, you: ${scissors}, machine: ${scissors}`;
            template(y);
        }
    } else if (x === 6 || x === 7) {
        const machinePlayer = "lizard";
        // 6 - 7 lizard
        if (playerOne === "rock") {
            let y = `✅ you: ${rock}, machine: ${lizard}, Rock crushes Lizard`;
            template(y);
        } else if (playerOne === "paper") {
            let y = `❌ you: ${paper}, machine: ${lizard}, Lizard eats Paper`;
            template(y);
        } else if (playerOne === "scissors") {
            let y = `✅ you: ${scissors}, machine: ${lizard}, Scissors decapitates Lizard`;
            template(y);
        } else if (playerOne === "spock") {
            let y = `❌ you: ${spock}, machine: ${lizard}, Lizard poisons Spock`;
            template(y);
        } else if (playerOne === machinePlayer) {
            let y = `DRAW, you: ${lizard}, machine: ${lizard}`;
            template(y);
        }
    }

    else if (x === 8 || x === 9) {
        const machinePlayer = "spock";
        //     // 8 - 9 spock
        if (playerOne === "rock") {
            let y = `❌ you: ${playerOne}, machine: ${machinePlayer}, Spock vaporizes Rock`;
            template(y);
        } else if (playerOne === "paper") {
            let y = `✅ you: ${playerOne}, machine: ${machinePlayer}, Paper disproves Spock (I don't know why)`;
            template(y);
        } else if (playerOne === "scissors") {
            let y = `❌ you: ${playerOne}, machine: ${machinePlayer}, Spock smashes Scissors`;
            template(y);
        } else if (playerOne === "lizard") {
            let y = `✅ you: ${playerOne}, machine: ${machinePlayer}, Lizard poisons Spock`;
            template(y);
        } else if (playerOne === machinePlayer) {
            let y = `DRAW, you: ${spock}, machine: ${spock}`;
        }

    }



}


//Modal



