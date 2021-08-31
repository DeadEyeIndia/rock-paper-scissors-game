const body = document.querySelector("body");
//rules model
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const ruleModel = document.getElementById("model");
const hands = document.querySelector(".hands");
const contest = document.querySelector(".contest");
const computerHandImage = document.getElementById("computerHandImage");
const randomImage = [
  {
    src: "/images/icon-paper.svg",
  },
  {
    src: "/images/icon-rock.svg",
  },
  {
    src: "/images/icon-scissors.svg",
  },
];

let SCORE = 0;

openBtn.addEventListener("click", () => {
  ruleModel.style.display = "flex";
  closeBtn.removeEventListener("click", () => {});
});

closeBtn.addEventListener("click", () => {
  ruleModel.style.display = "none";
  openBtn.removeEventListener("click", () => {});
});

const userPickedHand = (hand) => {
  // console.log(hand);
  //Hide
  hands.style.display = "none";

  // Show
  contest.style.display = "flex";

  if (hand == "rock") {
    document.getElementById("userImage").src = "/images/icon-rock.svg";
    document.getElementById("userHandImage").classList.add("rock-hand");
    document.getElementById("userHandImage").classList.remove("paper-hand");
    document.getElementById("userHandImage").classList.remove("scissor-hand");
  } else if (hand == "paper") {
    document.getElementById("userImage").src = "/images/icon-paper.svg";
    document.getElementById("userHandImage").classList.add("paper-hand");
    document.getElementById("userHandImage").classList.remove("rock-hand");
    document.getElementById("userHandImage").classList.remove("scissor-hand");
  } else {
    document.getElementById("userImage").src = "/images/icon-scissors.svg";
    document.getElementById("userHandImage").classList.add("scissor-hand");
    document.getElementById("userHandImage").classList.remove("rock-hand");
    document.getElementById("userHandImage").classList.remove("paper-hand");
  }

  let computerPick = pickComputerHand();

  referee(hand, computerPick);
};

const playAgain = () => {
  // Hide
  contest.style.display = "none";
  // Show
  hands.style.display = "flex";
};

const referee = (user, computer) => {
  if (user == "paper" && computer == "scissor") {
    setDecision("YOU LOSE");
  } else if (user == "paper" && computer == "rock") {
    setDecision("YOU WIN");
    setScore(SCORE + 1);
  } else if (user == "rock" && computer == "paper") {
    setDecision("YOU lose");
  } else if (user == "rock" && computer == "scissor") {
    setDecision("YOU win");
    setScore(SCORE + 1);
  } else if (user == "scissor" && computer == "paper") {
    setDecision("YOU win");
    setScore(SCORE + 1);
  } else if (user == "scissors" && computer == "rock") {
    setDecision("YOU lose");
  } else if (user == "paper" && computer == "paper") {
    setDecision("Tie");
  } else if (user == "scissor" && computer == "scissor") {
    setDecision("Tie");
  } else if (user == "rock" && computer == "rock") {
    setDecision("Tie");
  }
};

const setDecision = (decision) => {
  // console.log(decision);
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
  // console.log(score);
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissor"];
  let computerHand = hands[Math.floor(Math.random() * 3)];
  // console.log(computerHand);
  if (computerHand == "rock") {
    document.getElementById("computerPickImage").src = "/images/icon-rock.svg";
    computerHandImage.classList.add("rock-hand");
    computerHandImage.classList.remove("paper-hand");
    computerHandImage.classList.remove("scissor-hand");
  } else if (computerHand == "paper") {
    document.getElementById("computerPickImage").src = "/images/icon-paper.svg";
    computerHandImage.classList.add("paper-hand");
    computerHandImage.classList.remove("rock-hand");
    computerHandImage.classList.remove("scissor-hand");
  } else {
    document.getElementById("computerPickImage").src =
      "/images/icon-scissors.svg";
    computerHandImage.classList.add("scissor-hand");
    computerHandImage.classList.remove("paper-hand");
    computerHandImage.classList.remove("rock-hand");
  }

  return computerHand;
};
