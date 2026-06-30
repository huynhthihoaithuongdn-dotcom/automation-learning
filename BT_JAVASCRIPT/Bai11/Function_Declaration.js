function tenFunction () {
    khối lệnh thực hiện nhiệm vụ
};
tenFunction();
// // step1: khai báo, sd keyword function, tên hàm (sd quy tắc lạc đà: chữ cái của từ thứ2 viết hoa), ghi khối lệnh của hàm {...}
// // step2: gọi hàm. ghi lại tên hàm như phía trên



// without parameters
function greet() {
    console.log('Hello!');
}           // đây là tạo hàm
greet();    // vì sao phải gọi hàm? giống như việc bạn viết một "công thức". 
           // JavaScript chỉ ghi nhớ rằng có một hàm tên là greet, chứ không tự động thực hiện những câu lệnh bên trong.



// with parameters
function greet_1(name) {
    console.log('hello', name, '@@@@')
};
greet_1 ('world');
greet_1 ('nguoi tang hinh');
greet_1 ('spiderman');

// // Cách hoạt động: khi code chạy tới dòng greet_1 ('world') --> nó gán tên = world vào dòng code function 
// //                  ---> chạy dòng code tiếp theo là console ---> in ra kq



function tinhTong(a, b) {
    return a + b
};
console.log(tinhTong(5,7));

