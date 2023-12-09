const circleArea = document.getElementById('circleArea');

const firstColor = ["black","silver","gray","white","maroon","red","purple","fuchsia", "green","lime"]
const secondColor = ["olive","yellow","navy","blue","teal","aqua","orange","aliceBlue","coral","cadetBlue"]
let circles = []

function generateCircles() {
  const count = document.getElementById('count').value;
  if (!requireNumber(count)) return

  for (const circle of circles) {
    circleArea.removeChild(circle)
  }
  circles = []
  for (let i = 0; i < count; i++) {
    createAndAddCircleToContainer();
  }
}

function createCircle() {
  const circle = document.createElement("div");
  const diameter = Math.floor(Math.random() * 100) + 50;

  const color1 = firstColor[Math.floor(Math.random() * 10)]
  const color2 = secondColor[Math.floor(Math.random() *10)]

  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  circle.style.backgroundColor = color1;
  circle.style.borderRadius = "50%";
  circle.style.position = 'absolute'
  circle.className = 'circle'

  circle.addEventListener('click', function(event) {
    const color = event.target.style.backgroundColor;
    circle.style.backgroundColor = color.toLowerCase() == color1.toLowerCase() ? color2 : color1
  })

  return circle;
}

function createAndAddCircleToContainer() {
  const circle = createCircle()
  circles.push(circle);
  const circleRect = circle.getBoundingClientRect()
  const circleAreaRect = circleArea.getBoundingClientRect();
  const X = Math.floor(Math.random() * (circleAreaRect.width - circleRect.width));
  const Y = Math.floor(Math.random() * (circleAreaRect.height -  circleRect.height));
  circle.style.left = X + "px";
  circle.style.top = Y + "px";
  circleArea.appendChild(circle)
}

function requireNumber(num) {
  if (isNaN(num) || num < 0){
    alert(`input is invalid. Enter a number Greater than zero`);
    return false
  }
  return true
}
