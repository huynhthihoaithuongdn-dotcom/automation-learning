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
let tuoi = 20;
let status; 

status = tuoi >=25 ? 'Adult' : 'Child'
console.log(status)  // return Adult

// IF statement:
let temperature = 30;

if (temperature > 25) {
    console.log('It is hot');
}

//IF ...ELESE:
if (tuoi >=21) {
    console.log('Adult');
} else {
    console.log('Child');
}

// IF ELSE IF ELSE:
let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else if (score >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}

//Switch statement
// dùng để so sánh 1 giá trị với nhiều TH khác nhau
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName);  // Wednesday

//Loop: vòng lặp
for (initialization; condition; increment) {statements} // khởi tạo, đk, increment/decrement
// chạy cho đến khi DK false là dừng
// FOR: biết đc mình biết rõ nó sẽ lặp lại bn lần. Dùng để viết mã hoặc  lặp số.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Count backwards
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1

// Skip numbers
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10



// While loop: ktra trc khi chạy
// WHILE: dùng khi KO biết lặp lại bn lần. dùng khi phải chờ ĐK xảy ra. 
let count_ = 1;

while (count_ <= 5) {
    console.log(count_);
    count_++;
}
// Output: 1, 2, 3, 4, 5. Nếu ban đầu ktra thất bại thì sẽ ko chạy. 
// Nếu MD đúng thì sẽ chạy và tiếp tục chạy cho đến khi count <= 5

// User input simulation
let password = '';
while (password !== 'secret') {
    password = prompt('Enter password:');
}
console.log('Access granted');


// Do...while: chạy trc, ktra sau
// Dùng khi bắt buộc thực hiện hành động trc
let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);
// Output: 1, 2, 3, 4, 5

// Runs at least once even if condition is false
let x = 10;
do {
    console.log('This will print once');
} while (x < 5);


// break: thoát khỏi loop
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log('First even number:', i);
        break;  // Exit loop
    }
}
// Output: First even number: 2



// continue: bỏ qua lần lặp hiện tại và chuyển ngay sang lần lặp tiếp theo
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9


// Nested loops: lặp lồng lặp
