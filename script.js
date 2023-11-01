var uScore = 0;
var cScore = 0;
const uScore_span = document.getElementById("user-sc");
const cScore_span = document.getElementById("comp-sc");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const sciss_div = document.getElementById("sciss");

function getCInput() {
  const choices = ["r", "p", "s"];
  const raN = Math.floor(Math.random() * 3);
  return choices[raN];
}

function getWord(input) {
  if (input === "r") return "Rock";
  if (input === "p") return "Paper";
  return "Scissors";
}

function getElement(input) {
  if (input === "r") return rock_div;
  if (input === "p") return paper_div;
  if (input === "s") return sciss_div;
}

function win(uInput, cInput) {
  uScore_span.innerHTML = ++uScore;
  result_p.innerHTML = `${getWord(uInput).fontcolor("#DD4C4C")} beats ${getWord(
    cInput
  )}. You win!`;
  getElement(uInput).classList.add("green");
  setTimeout(function () {
    getElement(uInput).classList.remove("green");
  }, 300);
}

function lose(uInput, cInput) {
  cScore_span.innerHTML = ++cScore;
  result_p.innerHTML = `${getWord(cInput)} beats ${getWord(uInput).fontcolor(
    "#DD4C4C"
  )}. You lose!`;
  getElement(uInput).classList.add("red");
  setTimeout(function () {
    getElement(uInput).classList.remove("red");
  }, 300);
}

function tie(uInput) {
  result_p.innerHTML = `You both chose ${getWord(uInput).fontcolor(
    "#DD4C4C"
  )}. Draw!`;
  getElement(uInput).classList.add("white");
  setTimeout(function () {
    getElement(uInput).classList.remove("white");
  }, 300);
}

function game(uInput) {
  cInput = getCInput();
  switch (uInput + cInput) {
    case "rs":
    case "pr":
    case "sp":
      win(uInput, cInput);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(uInput, cInput);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(uInput);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  sciss_div.addEventListener("click", function () {
    game("s");
  });
}

main();
