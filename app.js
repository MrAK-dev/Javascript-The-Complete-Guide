// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);
// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);
// const removedElements = hobbies.splice(0);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);
// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Max' }));

// const manuel = personData.find((person, index, personData) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, index, persons) => {
//   return person.name === 'Max';
// });
// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, index, prices) => {
//   const priceObj = { index, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = prices.map((price, index, prices) => {
//   const priceObj = { index, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedPrices.reverse());

// const sortedPrices = prices.sort((a, b) => {
//   return a > b ? 1 : -1;
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter((price) => price > 6);

// console.log(filteredArray);

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = parseInt(transformedData[1]);
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);
// console.log(Math.min(...prices));

// const persons = [
//   { name: 'Max', age: 30 },
//   { name: 'Manuel', age: 31 },
// ];
// const copiedPersons = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 31;

// console.log(persons, copiedPersons);

const nameData = ['Max', 'Schwarz', 'Mr', 30];
const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
