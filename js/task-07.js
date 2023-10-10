// const fontSizeControl = document.getElementById('font-size-control');
//   const textSpan = document.getElementById('text');
//   fontSizeControl.addEventListener('input', function() {
//     textSpan.style.fontSize = fontSizeControl.value + 'px';
// });


const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');
fontSizeControl.addEventListener('input', function() {
  textSpan.style.fontSize = fontSizeControl.value + 'px';
});
textSpan.style.fontSize = fontSizeControl.value + 'px';

