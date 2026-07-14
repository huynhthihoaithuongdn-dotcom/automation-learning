// Tạo array fruits
const fruits = [ "apple", "banana", "orange", "mango", "grape"];

// 1. In phần tử đầu tiên
console.log('First:', fruits[0]);

// 2. In phần tử cuối cùng
console.log('Last:', fruits[fruits.length - 1]);

// 3. In số lượng
console.log('Length:', fruits.length);

// 4. Thêm "kiwi" và in array
fruits.push('kiwi'); 
console.log('After push:', fruits.join(","));

// 5. Xóa phần tử đầu và in array
fruits.shift(); 
console.log('After shift:', fruits.join(","));