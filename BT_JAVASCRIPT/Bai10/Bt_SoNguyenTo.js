// Tìm và in số nguyên tố từ 1-50 trên 1 dòng cách dấu cách. Cuối in tổng số.

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// in ra cac so nguyen to 
// for (let i = 1; i <= 50; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }            

let result = "";
let count = 0;

for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
        result += i + " ";
        count++;
    }
}

console.log(result.trim());
console.log("Tổng số nguyên tố:", count);