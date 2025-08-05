let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const geneCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random () * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "game was draw. play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText ="You Win";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = "You Lost";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = geneCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice) {
        //draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "stone") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //stone, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
         //stone, paper
         userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});