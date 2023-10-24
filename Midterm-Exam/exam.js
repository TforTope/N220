
let cWinning = 100;

function rollDie() {

    const roll = Math.floor(Math.random() * 6) + 1;
    
    const winningsParagraph = document.getElementById("bw");
    winningsParagraph.innerHTML = `Current Winnings: ${cWinning}`;
    
    const winText = document.getElementById("wText");
    winText.innerHTML = `You rolled a ${roll}!`;

    switch (roll) {
        case 1:
            winText.innerHTML += " It is good to be number 1! You doubled your winnings!";
            cWinning *= 2;
            break;
        case 2:
            winText.innerHTML += " Second best is not good enough. Roll again.";
            break;
        case 3:
            winText.innerHTML += " Three is not a lucky number at all. You lose all your winnings!";
            cWinning = 0;
            break;
        case 4:
            winText.innerHTML += " Four is lucky like a four-leafed clover. You won 400 points!";
            cWinning += 400;
            break;
        case 5:
            winText.innerHTML += " Five Alive. You are still in the game, but there is no change in your winnings.";
            break;
        case 6:
        
            const userNumber = prompt("Enter a number between 1 and 100:");
            const targetNumber = Math.floor(Math.random() * 100) + 1;
            
            if (userNumber == targetNumber) {
                winText.innerHTML += ` You are lucky indeed! You just multiplied your winnings by ${userNumber}!`;
                cWinning *= userNumber;
            } else if (userNumber < 50) {
                winText.innerHTML += ` You picked a rather low number, but you win those points.`;
                cWinning += Number(userNumber);
            } else {
                winText.innerHTML += ` Good choice - but not what I was hoping for.`;
                cWinning -= 10;
            }
            break;
    }
    
    const newWinningsParagraph = document.getElementById("nw");
    newWinningsParagraph.innerHTML = `New Winning Total: ${cWinning}`;
}
