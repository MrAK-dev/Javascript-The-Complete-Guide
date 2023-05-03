class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  static validate(value, flag, validatorValue = 5) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }

    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(uName, uPasswrod) {
    this.userName = uName;
    this.passwrod = uPasswrod;
  }

  greet() {
    console.log('Hi, I am ' + this.userName);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.userNameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');

    this.form.addEventListener('submit', this.signupHandler.bind(this));
  }

  signupHandler(event) {
    event.preventDefault();
    const enteredUsername = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (
      !Validator.validate(enteredUsername, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH)
    ) {
      alert(
        'Invalid input - username or passwrod is wrong(password should be at least six characters).'
      );
      return;
    }
    const newUser = new User(enteredUsername, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}

new UserInputForm();
