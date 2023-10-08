function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxCountInput = document.getElementById('boxCount');

createButton.addEventListener('click', () => {
  const amount = parseInt(boxCountInput.value, 10);
  if (!isNaN(amount)) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});