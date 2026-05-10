// Canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Catcher object
const player = {
  width: 100,
  height: 20,
  x: canvas.width / 2 - 50,
  y: canvas.height - 40,
  speed: 7,
  color: "#4CAF50"
};

// Falling object
const object = {
  width: 30,
  height: 30,
  x: Math.random() * (canvas.width - 30),
  y: 0,
  speed: 3,
  color: "#FF5722"
};

// Score
let score = 0;

// Keyboard controls
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    rightPressed = true;
  }

  if (e.key === "ArrowLeft") {
    leftPressed = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    rightPressed = false;
  }

  if (e.key === "ArrowLeft") {
    leftPressed = false;
  }
});

// Draw catcher
function drawPlayer() {
  ctx.fillStyle = player.color;

  ctx.fillRect(
    player.x,
    player.y,
    player.width,
    player.height
  );
}

// Draw falling object
function drawObject() {
  ctx.fillStyle = object.color;

  ctx.fillRect(
    object.x,
    object.y,
    object.width,
    object.height
  );
}

// Draw score
function drawScore() {
  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";

  ctx.fillText("Score: " + score, 20, 30);
}

// Move catcher
function movePlayer() {

  if (
    rightPressed &&
    player.x < canvas.width - player.width
  ) {
    player.x += player.speed;
  }

  if (
    leftPressed &&
    player.x > 0
  ) {
    player.x -= player.speed;
  }
}

// Move falling object
function moveObject() {
  object.y += object.speed;

  // Check collision
  if (
    object.y + object.height >= player.y &&
    object.x < player.x + player.width &&
    object.x + object.width > player.x
  ) {

    score++;

    resetObject();
  }

  // Reset if missed
  if (object.y > canvas.height) {
    resetObject();
  }
}

// Reset falling object position
function resetObject() {
  object.y = 0;
  object.x =
    Math.random() * (canvas.width - object.width);
}

// Main game loop
function updateGame() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlayer();
  drawObject();
  drawScore();

  movePlayer();
  moveObject();

  requestAnimationFrame(updateGame);
}

// Start animation
updateGame();
