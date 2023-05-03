const age = [30, 29, 54];

//  [30, 29, 54] => [30, 29, 54, _]
//  [0 , 1 , 2 ] => [0 , 1 , 2 , 3]
age.push(60); // => Constant Time Complexity: O(1)

//  [30, 29, 54] => [_, 30, 29, 54]
//  [0 , 1 , 2 ] => [0, 1 , 2 , 3 ]
age.unshift(10); // => Linear Time Complexity: O(n)

const myAge = age[1]; // => Constant Time Complexity: O(1)

// ----------

const namePopularity = [
  { userName: 'Max', usages: 5 },
  { userName: 'Manu', usages: 6 },
];

const manuUsages = namePopularity.find(
  (person) => person.userName === 'Manu'
).usages;
//  BEST CASE: Constant TIme Complexity => O(1)
//  WORST CASe: Linear Time COmplexity => O(n)
//  AVERAGE CASE: Linear Time COmplexity => O(n);

const nameMap = {
  max: 5,
  'manu:': 6,
};

const manuUsages2 = nameMap['manu']; // => Constant Time COmplexity: O(1)

// const nameRealMap = new Map();
