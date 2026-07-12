// slice: chon ra/trich xuat element
let fruits = ['apple', 'banana', 'orange', 'mango', 'grape', 'watermelon'];

// slice(start, end) - end not included
let fruits_1 = fruits.slice(1,4);
console.log(fruits_1);

// slice(start) - from start to end
let fruits_2 = fruits.slice(1);
console.log(fruits_2);

// Negative index (from end) - select element from the end to the selected position
let fruits_3 = fruits.slice(-2);
console.log(fruits_3);