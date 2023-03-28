//  pure function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

//  inpure fucntion

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

//  side effects

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // here is side effect
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

// factory functions
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

//  clousers
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'Max';

function greetUser() {
  let name = 'Anna';
  console.log('Hi ' + name);
}
let name = 'Maximilian';
userName = 'Manuel';

greetUser();

//  recursion

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}
console.log(powerOf(2, 3)); // 2 * 2 * 2

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Harry',
            },
            {
              name: 'Amilia',
            },
          ],
        },
      ],
    },
    {
      name: 'Julia',
    },
  ],
};

function getFriendsNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendsNames(friend));
  }

  return collectedNames;
}

console.log(getFriendsNames(myself));
