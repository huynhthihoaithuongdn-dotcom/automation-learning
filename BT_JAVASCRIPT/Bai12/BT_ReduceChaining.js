const numbers = [3, 7, 2, 9, 1, 5, 8, 4, 6];

// 1. Tính tổng
let sum = numbers.reduce((total, num) => total + num);
console.log('Sum:', sum);


// 2. Tìm max
let max = numbers.reduce(function(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
);
console.log(max);



// 3. Tổng số chẵn (chain filter + reduce)
let even = numbers.filter(num => num % 2 === 0);
let tong = even.reduce((total, num) => total + num);
console.log('Even sum:', tong);

