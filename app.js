let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3); // Use Math.floor here
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundcolor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor = "green";
    } else {
        comscore++;
        compScorePara.innerText = comscore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundcolor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice;
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});