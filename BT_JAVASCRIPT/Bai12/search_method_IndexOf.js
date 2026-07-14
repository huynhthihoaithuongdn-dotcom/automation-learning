// IndexOf: tim index cua value

// Cu phap: array.indexOf(searchElement, fromIndex)
// searchElement: phần tử cần tìm.
// fromIndex (optional): vị trí bắt đầu tìm kiếm.

let fruits = ['apple', 'banana', 'orange', 'banana', 'banana'];

console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('grape'));           // -1: not found
console.log(fruits.indexOf('banana')); 
console.log(fruits.indexOf('banana', 2)); 