document.addEventListener("DOMContentLoaded", e => {
    // Track the clicks of the players
    const X = document.createElement("img");
    X.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
    const O = document.createElement("img");
    O.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
    let turnCount = 1;

    const space1 = document.getElementById("space1")
    space1.addEventListener("click", e => {
        if (turnCount % 2 === 1) {
            space1.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0) {
            space1.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        } else {
            break;
        }
        turnCount++;
    })
})
