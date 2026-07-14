// Find: 

let numbers = [99, 5, 12, 8, 130, 44];


let tim = numbers.find(num => num > 10);
console.log(tim);       // tim ra number thoa man dieu kien dau tien, nhung number khac bi loai (first match)

let tim_2 = numbers.filter(num => num > 10);
console.log(tim_2);     // loc ra all numbers satisfy the condition. 


let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }, 
    { id: 3, name: 'Amora' }
];

let tim_3 = users.find(user => user.id === 3);
console.log(tim_3); 
