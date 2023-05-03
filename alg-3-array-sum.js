function sumUp(numbers) {
  let sum = 0; // ex 1

  for (let i = 0; i < numbers.length; i++) {
    // ex n
    sum += numbers[i];
  }
  return sum; // ex 1
}

//  Linear Time Complexity => O(n);

const array = [1, 2, 3];

console.log(sumUp(array)); // 6
