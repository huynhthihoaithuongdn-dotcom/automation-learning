// splice: vua xoa phan tu khoi mang goc, vua tra ve phan tu bi xoa. 
let numbers = [1, 2, 3, 4, 5];

// Remove: splice(start, deletedCount)
let xoa = numbers.splice(1,3);
console.log(xoa);       // return 2 3 4: thuc hien xoa element numbers.splice(1,3) trc. Display the deleted element
console.log(numbers);   // then 1 5: return the orignal array (tra ve mang goc)

/* The differences between slice() & splice()
- slice() → chỉ sao chép một phần, mảng gốc không thay đổi.
- splice() → cắt và lấy đi, mảng gốc bị thay đổi.
*/ 

// Add: splice(start, deletedCount, item1, item2,.....)
numbers.splice(5, 0, 888, 77.545645, 657654345);
console.log(numbers); 

numbers.splice(2, 0, 43, 92, 67, 99);
console.log(numbers);                   // chen new elements vao index t2. keep the old elements

// Replace: 
numbers.splice(2, 2, 45543, 7845678);
console.log(numbers);

