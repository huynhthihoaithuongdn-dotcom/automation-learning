// map: dùng để tạo một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. 
// Mảng ban đầu không bị thay đổi.

let numbers = [1, 2, 3, 4, 5];

// nhan doi 
let nhanDoi = numbers.map(nhan => nhan*2);
console.log(nhanDoi);       // [2, 4, 6, 8, 10]


// Trích xuất thuộc tính từ các đối tượng
let users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
];

let ten = users.map(tenNV => tenNV.name);       // tenNV => tenNV.name: function(tenNV) {return tenNV.name;}
console.log(ten);           // ['John', 'Jane', 'Bob']
