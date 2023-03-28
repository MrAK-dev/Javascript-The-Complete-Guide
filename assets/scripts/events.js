const button = document.querySelector('button');

// button.onclick = function () {

// };

const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);
// button.addEventListener('click', anotherButtonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach((button) => {
//   button.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', (event) => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener(
  'click',
  (event) => {
    console.log('Clicked DIV');
    console.log(event);
  }
  // true
);

button.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('Clicked button');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', (event) => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', (event) => {
  // console.log(event.currentTarget); - always shows element on which added event listener
  // console.log(event.target); - shows element on which clicked right now
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // TRIGGERING DOM EVENT PROGRAMMATICALLY
  // form.submit();
  button.click();
});
