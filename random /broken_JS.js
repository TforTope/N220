let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(numb) {
    let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
    document.getElementById("compChoice").textContent = CompDecision;

    if (numb === 3) {
        innerscore -= 0.5;
    }

    if (numb === 1) {
        if (CompDecision === "Paper") {
            innerscore -= 1;
        }
        if (CompDecision === "Scissors") {
            innerscore += 1;
        }
    }

    if (numb === 2) {
        if (CompDecision === "Rock") {
            innerscore -= 1;
        } else {
            innerscore += 1;
        }
    }

    document.getElementById("score").textContent = innerscore;
  }