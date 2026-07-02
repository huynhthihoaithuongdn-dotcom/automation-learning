// Tạo function createProfile với default parameters
function createProfile(name="Anonymous", age=0, city="Unknown") {
    return 'Ten: ${name}, Tuoi: ${age}, TP: ${city}'
};

console.log(createProfile("Khanh",25,"HCM"));

// Gọi function và in kết quả