// Post-increment: trả về trc, tăng sau
let x = 5;

console.log(x++)   // return 5
console.log(x)     // return 6


// Pre-increment: tăng trc, trả về sau
let y = 5;

console.log(++y)   // return 6
console.log(y)     // return 6

// Comparison operators
// sd === và !== khi testAPI or testDB, để cho kq chính xác nhất
// sd == và != khi testWeb
// vd: 5 == '5' --> true vì number5 bằng string5 trên UI, kq tương đối
// vd: 5 === '5' --> false vì number 5 ko bằng string5, kq tuyệt đối
// vd: 5 != 10  --> false vì number5 ko bằng number10
// vd: 5!== '5' --> false vì number5 ko bằng string5, kq tuyệt đối

//Logical operators: toán tử logic
let age = 25
let hasLicense = true

if (age >= 18 && hasLicense) (console.log('CanDrive'))  // return CanDrive
if (age < 18 && hasLicense) (console.log('CanDrive'))   // not return
if (age < 18 || hasLicense) (console.log('CanDrive'))   // return CanDrive

//Ternary operator: toán tử 3 ngôi
// condition ? valueTrue : valueFalse

let age = 20;
let status; 

console.log(age? 'Adult':'Child')