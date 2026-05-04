const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Initial shape properties
let x = 50;
let y = 100;
let width = 100;
let height = 60;
let color = "blue";

// Draw rectangle
function drawRect() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// Change color on button click
function changeColor() {
  color = color === "blue" ? "red" : "blue";
  drawRect();
}

// Move rectangle on canvas click
canvas.addEventListener("click", function(event) {
  const rect = canvas.getBoundingClientRect();
  x = event.clientX - rect.left - width / 2;
  y = event.clientY - rect.top - height / 2;
  drawRect();
});

// Simple animation (move automatically)
function animate() {
  x += 1;
  if (x > canvas.width) {
    x = -width;
    y += Math.sin(x * 0.05);
  }
  drawRect();
  requestAnimationFrame(animate);
}

// Initial draw
drawRect();

// Start animation
animate();
