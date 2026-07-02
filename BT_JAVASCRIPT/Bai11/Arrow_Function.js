// arrow function
const tong = (a, b) => {
    return a+b
};
console.log(tong(5,7));


// shorter arrow function
const tong_1 = (a,b) => a+b
console.log(tong_1(5,7));


// than ham phuc tap, can them khoi block {}
// way1: Func Expression:
let multiplyAndAdd = function(a, b) {
    let x = a * b;
    let y = a + b;
    return x + y + 10;
};
console.log(multiplyAndAdd(2, 3));

// way2: Arrow Function:
let multiplyAndAdd_Arrow = (a,b) => {
    let x = a * b;
    let y = a + b;
    return x + y + 10;
}
console.log(multiplyAndAdd_Arrow(2, 3));
console.log(multiplyAndAdd_Arrow(5, 7));


// goi ham trong ham
function cong(a,b) {
    return a+b
}; 
function Nhan(a,b) {
    return a*b
}; 
function congNhan (num1, num2, num3) {
    let sum = cong(num1, num2);
    let tich = Nhan(sum, num3);
    return tich;
};
let so = congNhan(53, 543, 603);
console.log(so);