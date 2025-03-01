function playGame() {
    let humanScore = 0;  // Track human score inside playGame
    let computerScore = 0;  // Track computer score inside playGame

    function getComputerChoice() {
        const randomChoice = Math.floor(Math.random() * 3);
        const choices = { 0: "rock", 1: "paper", 2: "scissors" };
        return choices[randomChoice];
    }

    function getHumanChoice() {
        let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
        while (!["rock", "paper", "scissors"].includes(choice)) {
            choice = prompt("Invalid choice! Choose rock, paper, or scissors").toLowerCase();
        }
        return choice;
    }

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win this round! 🎉");
            humanScore++;  // Increase human score
        } else {
            console.log("You lose this round! 😢");
            computerScore++;  // Increase computer score
        }

        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Announce the final result
    console.log("\nFinal Score:");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("😢 The computer wins this time. Try again!");
    } else {
        console.log("It's a draw! Well played.");
    }
}

// Start the game
playGame();
