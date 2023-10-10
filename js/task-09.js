function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// function changeBackgroundColor() {
//   const newColor = getRandomHexColor();
//   document.body.style.backgroundColor = newColor;
//   const colorSpan = document.querySelector('.color');
//   colorSpan.textContent = newColor;
// }


const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}








