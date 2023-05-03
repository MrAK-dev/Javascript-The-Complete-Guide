function isEvenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

//  Constant Time COmpexity => O(1);
console.log(isEvenOrOdd(10)); // 'Even'
console.log(isEvenOrOdd(11)); // 'Odd'
