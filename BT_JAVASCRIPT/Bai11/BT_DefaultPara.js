// // Tạo function createProfile với default parameters
// // Gọi function và in kết quả

function createProfile(name='Anonymous', age=0, city='Unknown') {
    return `Ten: ${name}, Tuoi: ${age}, TP: ${city}`;
};

console.log(createProfile('Khanh', 25, 'HCM'));
console.log(createProfile('An', 20));
console.log(createProfile());