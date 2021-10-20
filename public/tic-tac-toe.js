document.addEventListener("DOMContentLoaded", e => {
    // Track the clicks of the players
    let winner = null;
    let turnCount = 1;

    const space1 = document.getElementById("space1")
    space1.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space1.style["background-image"]) {
            space1.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
            turnCount++;
            checkWinner();
        } else if (turnCount % 2 === 0 && !space1.style["background-image"]) {
            space1.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
            turnCount++;
            checkWinner();
        }
    })

    const space2 = document.getElementById("space2")
    space2.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space2.style["background-image"]) {
            turnCount++;
            space2.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space2.style["background-image"]) {
            turnCount++;
            space2.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })

    const space3 = document.getElementById("space3")
    space3.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space3.style["background-image"]) {
            turnCount++;
            space3.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space3.style["background-image"]) {
            turnCount++;
            space3.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })

    const space4 = document.getElementById("space4")
    space4.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space4.style["background-image"]) {
            turnCount++;
            space4.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space4.style["background-image"]) {
            turnCount++;
            space4.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })

    const space5 = document.getElementById("space5")
    space5.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space5.style["background-image"]) {
            turnCount++;
            space5.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space5.style["background-image"]) {
            turnCount++;
            space5.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })

    const space6 = document.getElementById("space6")
    space6.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space6.style["background-image"]) {
            turnCount++;
            space6.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space6.style["background-image"]) {
            turnCount++;
            space6.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })

    const space7 = document.getElementById("space7")
    space7.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space7.style["background-image"]) {
            turnCount++;
            space7.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space7.style["background-image"]) {
            turnCount++;
            space7.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })

    const space8 = document.getElementById("space8")
    space8.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space8.style["background-image"]) {
            turnCount++;
            space8.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space8.style["background-image"]) {
            turnCount++;
            space8.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })

    const space9 = document.getElementById("space9")
    space9.addEventListener("click", e => {
        if (turnCount % 2 === 1 && !space9.style["background-image"]) {
            turnCount++;
            space9.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')")
        } else if (turnCount % 2 === 0 && !space9.style["background-image"]) {
            turnCount++;
            space9.style = ("background-image: url('https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')")
        }
    })
})


const checkWinner = () => {
    //ROWS
    // 1, 2, 3
    if (space1.style["background-image"] === space2.style["background-image"] && space2.style["background-image"] === space3.style["background-image"]) {
        console.log(space1.style["background-image"]);
        if (space1.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }
    // 4, 5, 6
    if (space4.style["background-image"] === space5.style["background-image"] && space5.style["background-image"] === space6.style["background-image"]) {
        if (space4.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }
    // 7, 8, 9
    if (space7.style["background-image"] === space8.style["background-image"] && space8.style["background-image"] === space9.style["background-image"]) {
        if (space7.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }
    //COLUMNS
    //1, 4, 7
    if (space1.style["background-image"] === space4.style["background-image"] && space4.style["background-image"] === space7.style["background-image"]) {
        if (space1.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }

    //2, 5, 8
    if (space2.style["background-image"] === space5.style["background-image"] && space5.style["background-image"] === space8.style["background-image"]) {
        if (space2.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }

    //3, 6, 9
    if (space3.style["background-image"] === space6.style["background-image"] && space6.style["background-image"] === space9.style["background-image"]) {
        if (space3.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }


    //DIAGONALS
    //1, 5, 9
    if (space1.style["background-image"] === space5.style["background-image"] && space5.style["background-image"] === space9.style["background-image"]) {
        if (space1.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }
    //3, 5, 7
    if (space3.style["background-image"] === space5.style["background-image"] && space5.style["background-image"] === space7.style["background-image"]) {
        if (space3.style["background-image"] === 'url("https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg")') {
            winner = "X";
            setHeader();
        } else {
            winner = "O";
            setHeader();
        }
    }
}




const setHeader = () => {
    const header = document.getElementById("winner");
        header.style["display"] = "block";
        header.innerText += winner;
}
