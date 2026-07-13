// Iterating Arrays là quá trình duyệt qua từng phần tử của mảng (array)
// for loop (traditional)

let fruits = ['apple', 'banana', 'orange', 'grape'];

for (let i = 0; i < fruits.length; i++) {       // fruits.length: so phan tu cua mang
    console.log(fruits[i]);
}

// for...of loop: duyệt trực tiếp từng giá trị trong mảng, không cần dùng chỉ số (index).
// for (let fruit of fruits_1): Lấy từng phần tử trong mảng fruits_1 và gán vào biến fruit
let fruits_1 = ['apple', 'banana', 'orange'];

for (let fruit of fruits_1) {
    console.log(fruit);
}