const form = document.getElementById('user-input');
const userNameInput = document.getElementById('username');
const passwrodInput = document.getElementById('password');

function signupHandler(event) {
  event.preventDefault();

  const enteredUsername = userNameInput.value;
  const enteredPassword = passwrodInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input - username must not be empty!');
    return;
  }

  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input - passwrod must be six characters or longer.');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword,
  };
  console.log(user);
  console.log('Hi, I`m ' + user.userName);
}

form.addEventListener('submit', signupHandler);
