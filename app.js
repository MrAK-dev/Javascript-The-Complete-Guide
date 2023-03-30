function randomIntBetween(min, max) {
  // min: 5; max: 10;
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.99999999999 -> 10
}

console.log(randomIntBetween(1, 10));

//  tagged templates

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
  return { name: productName, price: productPrice };
}
const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

//  regEx

const userInput = 'testtest.';
// const regex = new RegExp('')
const regex = /^\S+@\S+\.\S+$/;
regex.test(userInput);
console.log(regex.test('test@test.com'));
