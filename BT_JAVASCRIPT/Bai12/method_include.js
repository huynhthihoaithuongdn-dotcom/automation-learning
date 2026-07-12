// include: kiem tra su ton tai cua phan tu trong mang (array) hoac trong chuoi (string). Kq return True False

// include() trong Array: array.includes(value, start)
// value: gia tri can kiem tra
// start: optional. vi tri bat dau tim kiem 
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('mango'));
console.log(fruits.includes('apple'));
console.log(fruits.includes('apple', 0));
console.log(fruits.includes('apple', 3));


// include() trong String: string.includes(search String, position)
// searchString: chuoi can tim
// position: optional: vi tri bat dau tim

const text = "xin chao JS";
console.log(text.includes('chao'));
console.log(text.includes('CHAO'));     // phan biet HOA/thuong
console.log(text.toLowerCase().includes('JS'.toLowerCase()));       // ko phan biet HOA/thuong