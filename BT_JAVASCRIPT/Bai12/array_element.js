// dung de truy cap cac phan tu trong mang
// index-base access

let fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits[0]);  // apple
console.log(fruits[1]);  // banana
console.log(fruits[2]);  // orange

// Get last element
console.log(fruits[fruits.length - 4]); // mango

// Non-existent index
console.log(fruits[10]); // undefined


// array property:
let numbers = [1,556,65653,878];
console.log(numbers.length);

let thu = 'hoaithuong';


// check bien co phai array hay ko?
console.log(Array.isArray(numbers));
console.log(Array.isArray(thu));
