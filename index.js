let userName = "Ezekiel";
let welcomMessage = userName
  ? console.log(`Hello, ${userName}!`)
  : console.log("Hello");
let userQuestion = "Would I be rich?";
console.log(`${userName}'s Question: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "I do not have a say";
    break;
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It appears so.";
    break;
  case 3:
    eightBall = "Reply hazy, please try again.";
    break;
  case 4:
    eightBall = "Do no count on it!";
  case 5:
    eightBall = "Certainly no.";
    break;
  case 6:
    eightBall = "My sources say no.";
    break;
  case 7:
    eightBall = "You do not want to know the answer.";
    break;
}
console.log(`Answer: ${eightBall}`);
