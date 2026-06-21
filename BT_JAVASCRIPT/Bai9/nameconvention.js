// ✅ VALID
let firstName = 'John';
let first_name = 'John';
let firstName123 = 'John';
let $firstName = 'John';
let _firstName = 'John';
let firtstName_ = 'John'; 

// ❌ INVALID
// let 123name = 'John';     // Không bắt đầu bằng số
// let first-name = 'John';  // Không có dấu -
// let first name = 'John';  // Không có space
// let let = 'John';         // Không dùng reserved keywords

//biến dạng object//
let person = {
    name: 'An',
    age: 25,
    email: 'an123@gmail.com',
    isStudent: true
}
// lúc debug, dùng console, ,mình có thể //   // format: console.log(biến cha.biến con) //
console.log(person.name)    // output: An //

// biến dạng array // 
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
let mixed = [1, 'hello', true, null];
// lúc debug, dùng console, ,mình có thể //   // format: console.log(biến cha.biến con) //
console.log(numbers[0]);     // return 1
console.log(fruits.length);  // return 3

// chuyển đổi từ kiểuA sang kiểuB --> dùng Type Conversation //
// vd: chuyển từ kiểu Number sang String //
let number = 111
let string = String(number)
console.log(typeof string )  // output: string //