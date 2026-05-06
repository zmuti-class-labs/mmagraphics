const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let box = {
  x: 50,
  y: 50,
  size: 40
};

let score = 0;

// Draw box
function drawBox() {
  ctx.fillStyle = "blue";
  ctx.fillRect(box.x, box.y, box.size, box.size);
}

// Move box to random position
function moveBox() {
  box.x = Math.random() * (canvas.width - box.size);
  box.y = Math.random() * (canvas.height - box.size);
}

// Clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Game loop (simple animation)
function update() {
  clearCanvas();
  drawBox();
  requestAnimationFrame(update);
}

// Detect click
canvas.addEventListener("click", function (e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  if (
    mouseX >= box.x &&
    mouseX <= box.x + box.size &&
    mouseY >= box.y &&
    mouseY <= box.y + box.size
  ) {
    score++;
    document.getElementById("score").textContent = score;
    moveBox();
  }
});

// Start
update();