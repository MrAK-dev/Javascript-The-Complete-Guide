const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validate = (value, flag, validatorValue) => {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }

  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
};

const getUserInputValue = (inputElementId) => {
  return document.getElementById(inputElementId).value;
};

const createUser = (userName, userPassword) => {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error(
      'Invalid input - username or passwrod is wrong(password should be at least six characters).'
    );
  }
  return {
    userName,
    password: userPassword,
  };
};

const greetUser = (user) => {
  console.log('Hi, I am ' + user.userName);
};

const signupHandler = (event) => {
  event.preventDefault();

  const enteredUsername = getUserInputValue('username');
  const enteredPassword = getUserInputValue('password');

  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (error) {
    alert(error.message);
  }
};

const connectForm = (formId, formSubmitHandler) => {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
};

connectForm('user-input', signupHandler);
