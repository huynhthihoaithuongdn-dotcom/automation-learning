// Filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);



let users = [
    { name: 'John', age: 25, active: true },
    { name: 'Jane', age: 17, active: true },
    { name: 'Bob', age: 30, active: false }
];

let acceptUser = users.filter(user => user.age > 18 && user.active);
console.log(acceptUser);

let nonAcceptUser = users.filter(user => user.age > 15 && !user.active);    // !user.active: active la false
console.log(nonAcceptUser);