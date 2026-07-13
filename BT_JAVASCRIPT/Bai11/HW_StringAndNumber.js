// String utilities: Viết hoa chữ cái đầu, còn lại viết thường
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
console.log(capitalize('hello'));

// Đảo ngược chuỗi
function reverseString(str) {
  return str.split('').reverse().join('');
};
console.log(reverseString('hello'));

// Đếm nguyên âm
function countVowels(str) {
    const vowels ='aeiou';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

// // Number utilities: Tính giai thừa
// function factorial(n) {

// }


// Kiểm tra số nguyên tố
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (n % i === 0) return false;
    };
    return true;
};
console.log(isPrime(4));

// Test
