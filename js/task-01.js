// const categories = document.querySelectorAll('ul#categories > .item');
// console.log(`Number of categories: ${categories.length}`);
// categories.forEach((category) => {
// const title = category.querySelector('h2').textContent;
//   const elements = category.querySelectorAll('ul > li');
//   console.log(`Category: ${title} - Elements: ${elements.length}`);
// });    




const categories = document.querySelector('#categories');

const categoryItems = categories.children;

console.log(`Number of categories: ${categoryItems.length}`);

[...categoryItems].forEach((category) => {

const title = category.querySelector('h2').textContent;

  const elements = category.querySelector('ul').children;

  console.log(`Category: ${title} - Elements: ${elements.length}`);
}); 
