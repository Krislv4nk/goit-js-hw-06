const categories = document.querySelectorAll('ul#categories > .item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul > li');
  console.log(`Category: ${title} - Elements: ${elements.length}`);
});
