function enableGame(ourNum) {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = choices[Math.floor(Math.random() * 3)];
  var ans = document.querySelector(".answer");
  var text;
  if (randomNum == ourNum) {
    text = "Draw!";
  } else if (
    (randomNum == "rock" && ourNum == "paper") ||
    (randomNum == "paper" && ourNum == "scissors") ||
    (randomNum == "scissors" && ourNum == "rock")
  ) {
    text = "You Win!";
  } else {
    text = "You Lose!";
  }
  ans.innerHTML = `${text} \n
    Your choice: ${ourNum}\n
    Computer choice: ${randomNum}\n
    <button onclick="location.replace('https://www.w3schools.com')">Replace</button>;
    <button onclick="location.assign('https://www.w3schools.com')">Assign</button>;
    <button onclick="location.reload()">Play Again</button>`;
  console.log("hash = ", location.hash);
  console.log("host = ",location.host);
  // replace - not returing back
  // assign  can return back
}

function resetHash() {
    location.hash = "";
}
