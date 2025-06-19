const container = document.querySelector('.container');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => {
    setColor(square);
    setTimeout(() => removeColor(square), 1000); // remove after 1s
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
}

function getRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#2ecc71', '#f1c40f', '#e67e22'];
  return colors[Math.floor(Math.random() * colors.length)];
}
