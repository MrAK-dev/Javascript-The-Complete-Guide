// function getName() {
//   return prompt('Your name: ', '');
// }

// function greet() {
//   const userName = getName();
//   console.log('Hello ', userName);
// }

// greet();
const addListenerBtn = document.querySelector('#add-listener-btn');
const clickableBtn = document.querySelector('#clickable-btn');
const messageInput = document.querySelector('#click-message-input');

let person = { name: 'John' };
person = null;

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

addListenerBtn.addEventListener('click', addListener);
