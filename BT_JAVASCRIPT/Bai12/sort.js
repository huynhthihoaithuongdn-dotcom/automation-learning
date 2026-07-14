// Sort (ipt)

// sort alpha characters
let fruits = ['banana', 'apple', 'orange', 'mango', 'banana'];
console.log(fruits.sort());

// sort number
let numbers = [10, 5, -40, 25, 1000, 1, 1];
// console.log(number.sort());     // incorrect because not comparing

// sort asc
console.log(numbers.sort((a,b) => a - b)); 

// sort desc
console.log(numbers.sort((a,b) => b - a)); 
/* ko dung phep cong trong ham sort()
vd: a =2; b=5
a - b < 0 ===> a dung trc b
b - a > 0 ===> b dung trc a 
a + b > 0 or b + a > 0 ===> ko the xac dinh vi tri cua a,b 
*/

// sort object
let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Amora', age: 91 },
    { name: 'Ban', age: 35 }
];

console.log(users.sort((a,b) => a.age - b.age ));                   // sort by age
console.log(users.sort((a,b) => a.name.localeCompare(b.name )));    // sort by name; localeCompare() dùng để so sánh hai chuỗi theo thứ tự bảng chữ cái.



// neu sort by age = nhau, thi sort by name
// way1: 
users.sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    return a.name.localeCompare(b.name);
});
console.log(users);


// way2: sd if...else
users.sort((a,b) => {
    if (a.age !== b.age) {
        return a.age - b.age;
    } else {
        return a.name.localeCompare(b.name);
    }
});
console.log(users);