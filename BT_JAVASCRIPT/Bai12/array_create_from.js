// from string
let chars = Array.from('hello') 
console.log(chars);  // [ 'h', 'e', 'l', 'l', 'o' ]

// from array giong nhu mot object
// mot array 5 vi tri, gia tri hien tai (_), i la index
// Tạo một mảng có 5 phần tử, rồi với mỗi vị trí i, gán giá trị bằng i + 1.
let numbers = Array.from({length:5}, (_,i) => i+1)
console.log(numbers);  // [ 1, 2, 3, 4, 5 ]