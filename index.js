//  Library land
const uid = Symbol('uid');
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User',
};

user[uid] = 'p3';

// app land -> Using the library

user.id = 'p2'; // this should not be possible

console.log(user[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());

const company = {
  // curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false,
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();
    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}
console.log([...company]);
// const iterator = company.getEmployee();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const persons = ['Max', 'Manu'];
console.log(persons);

// --------- Reflect API
//  API for work with project, newer and better than Object

const course = {
  title: 'JavaScript = The Complete Guide',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

Reflect.defineProperty(course, 'price', { writable: true, value: 199 });

// Reflect.deleteProperty(course, 'title');
// Object.deleteProperty(course, 'title');

// delete course.title;

console.log(course.toString());

//  Proxy API
const coruseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === 'length') {
      return 0;
    }
    return obj[propertyName] || 'NOT FOUND';
  },
  set(obj, propertyName, newValue) {
    console.log('Sending data...');
    if (propertyName === 'rating') {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, coruseHandler);
pCourse.rating = 5;
// console.log(course, pCourse);
console.log(pCourse.title, pCourse.length, pCourse.rating);
