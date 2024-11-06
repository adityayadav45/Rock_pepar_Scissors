let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let option = ["rock", "paper" , "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx]
};

const drawGame = () => {
    console.log ("game was draw.");
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoise) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore ;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoise}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You  lose!");
        msg.innerText = `You lose!${compChoise} beats your${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoise =genCompChoice();
    console.log("comp choise =",compChoise);

    if(userChoice === compChoise){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoise === "paper" ? false: true;

        } else if (userChoice ==="paper"){
            //rock, scissors
            userWin = compChoise ==="Scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoise);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);
    });
});