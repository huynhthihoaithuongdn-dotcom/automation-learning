const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Gấp đôi mỗi số
let double = numbers.map(num => num * 2);
console.log('Double:', double.join(","));

// 2. Lọc số chẵn
let even = numbers.filter (num => num % 2 === 0);
console.log('Even:', even.join(","));

// 3. Lọc số > 5
let greaterThan5 = numbers.filter(num => num > 5);
console.log('Greater than 5:', greaterThan5.join(","));