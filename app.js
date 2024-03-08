const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const userStart = [230, 10];
const boardWidth = 560;
const boardHeight = 300;
const ballStart = [270, 40];
let currentPosition = userStart;
let ballCurrentPosition = ballStart;
let timerId;
let xDirection = 2;
let yDirection = 2;

// Create Blocks
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

// Draw all blocks
function addBlock() {
  for (let index = 0; index < blocks.length; index++) {
    const element = blocks[index];
    const block = document.createElement("div");
    block.style.left = element.bottomLeft[0] + "px";
    block.style.bottom = element.bottomLeft[1] + "px";
    block.classList.add("block");

    grid.appendChild(block);
  }
}

addBlock();

// Add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

// Draw user
function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

//Draw ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

// Move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", moveUser);

// Add the ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

// Move ball
function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}

timerId = setInterval(moveBall, 30);

// check for collisions
function checkForCollisions() {
  // check for wall collisions

  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter ||
    ballCurrentPosition[1] >= boardHeight - ballDiameter
  ) {
    changeDirection();
  }
}

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    xDirection = -2;
    return;
  }

  if (xDirection === 2 && yDirection === -2) {
    xDirection = 2;
    return;
  }

  if (xDirection === -2 && yDirection === -2) {
    xDirection = 2;
    return;
  }
}
