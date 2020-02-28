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
  const idToRenderModal = document.getElementById("toRenderModal");
  function template(y, didIWon) {
    console.log(y);

    if (didIWon === "yes") {
      let templateModal = `
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <h5 id="exampleModalLabel" class="badge badge-pill badge-success" style="
                font-size: 1.5em;
                border-radius: 5px;
            ">You won!</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    ${y}
                </div>
                <div class="modal-footer">
                  <p>Game created by Andrés Campuzano</p>
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Play again</button>
                </div>
              </div>
            </div>
          </div>
          `;
      return renderModal(templateModal);
    } else if (didIWon === "no") {
      let templateModal = `
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <h5 id="exampleModalLabel" class="badge badge-pill badge-danger" style="
                font-size: 1.5em;
                border-radius: 5px;
            ">You lost!</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    ${y}
                </div>
                <div class="modal-footer">
                  <p>Game created by Andrés Campuzano</p>
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Play again</button>
                </div>
              </div>
            </div>
          </div>
                `;
      return renderModal(templateModal);
    } else if (didIWon === "draw") {
      let templateModal = `
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <h5 id="exampleModalLabel" class="badge badge-pill badge-warning" style="
                font-size: 1.5em;
                border-radius: 5px;
            ">Draw</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    ${y}
                </div>
                <div class="modal-footer">
                  <p>Game created by Andrés Campuzano</p>
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Play again</button>
                </div>
              </div>
            </div>
          </div>
                `;
      return renderModal(templateModal);
    }
  }
  //printing
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
  if (x <= 1) {
    const machinePlayer = "rock";
    // 0 - 1 rock
    if (playerOne === "paper") {
      let y = `You: ${paper}, machine: ${rock}, Paper covers Rock`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === "scissors") {
      let y = `You: ${scissors}, machine: ${rock}, Rock crushes Scissors`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "lizard") {
      let y = `You: ${lizard}, machine: ${rock}, Rock crushes Lizard`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "spock") {
      let y = `You: ${spock}, machine: ${rock}, Spock vaporizes Rock`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === machinePlayer) {
      let y = `You: ${rock}, machine: ${rock}`;
      const didIWon = "draw";
      template(y, didIWon);
    }
  } else if (x <= 3) {
    const machinePlayer = "paper";
    // 2 - 3 paper
    if (playerOne === "rock") {
      let y = `You: ${rock}, machine: ${paper}, Paper covers Rock`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "scissors") {
      let y = `You: ${scissors}, machine: ${paper}, Scissors cuts Paper`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === "lizard") {
      let y = `You: ${lizard}, machine: ${paper}, Lizard eats Paper`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === "spock") {
      let y = `You: ${spock}, machine: ${paper}, Paper disproves Spock (I don't know why)`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === machinePlayer) {
      let y = `You: ${paper}, machine: ${paper}`;
      const didIWon = "draw";
      template(y, didIWon);
    }
  } else if (x <= 5) {
    const machinePlayer = "scissors";
    // 4 - 5 scissors
    if (playerOne === "rock") {
      let y = `You: ${rock}, machine: ${scissors}, Rock crushes Scissors`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === "paper") {
      let y = `You: ${paper}, machine: ${scissors}, Scissors cuts Paper`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "lizard") {
      let y = `You: ${lizard}, machine: ${scissors}, Scissors decapitates Lizard`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "spock") {
      let y = `You: ${spock}, machine: ${scissors}, Spock smashes Scissors`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === machinePlayer) {
      let y = `You: ${scissors}, machine: ${scissors}`;
      const didIWon = "draw";
      template(y, didIWon);
    }
  } else if (x <= 7) {
    const machinePlayer = "lizard";
    // 6 - 7 lizard
    if (playerOne === "rock") {
      let y = `You: ${rock}, machine: ${lizard}, Rock crushes Lizard`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === "paper") {
      let y = `You: ${paper}, machine: ${lizard}, Lizard eats Paper`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "scissors") {
      let y = `You: ${scissors}, machine: ${lizard}, Scissors decapitates Lizard`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === "spock") {
      let y = `You: ${spock}, machine: ${lizard}, Lizard poisons Spock`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === machinePlayer) {
      let y = `You: ${lizard}, machine: ${lizard}`;
      const didIWon = "draw";
      template(y, didIWon);
    }
  } else if (x <= 9) {
    const machinePlayer = "spock";
    //     // 8 - 9 spock
    if (playerOne === "rock") {
      let y = `You: ${playerOne}, machine: ${spock}, Spock vaporizes Rock`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "paper") {
      let y = `You: ${paper}, machine: ${spock}, Paper disproves Spock (I don't know why)`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === "scissors") {
      let y = `You: ${playerOne}, machine: ${spock}, Spock smashes Scissors`;
      const didIWon = "no";
      template(y, didIWon);
    } else if (playerOne === "lizard") {
      let y = `You: ${playerOne}, machine: ${spock}, Lizard poisons Spock`;
      const didIWon = "yes";
      template(y, didIWon);
    } else if (playerOne === machinePlayer) {
      let y = `You: ${spock}, machine: ${spock}`;
      const didIWon = "draw";
      template(y, didIWon);
    }
  }
}
