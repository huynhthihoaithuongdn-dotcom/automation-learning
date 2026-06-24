// Dùng vòng lặp: tính tổng 1-100, đếm số chẵn và lẻ.

let tong = 0;
let soLe = 0;
let soChan = 0;

// Viết vòng lặp
for (i=1; i<=100; i++) {
    tong += i                   // tong += i: lay gia tri hien tai cua bien (tong) cong them mot gia tri (i), roi gan lai kq cho (tong)
}
console.log('Tong tu 1 den 100 =', tong);


for (let i=1; i<=100; i++) {
    if (i % 2 === 0) {
        soChan++
    };
}
console.log('So chan: ', soChan);


for (let i=1; i<=100; i++) {
    if (i % 2 !== 0) {
        soLe++
    };
}
console.log('So le:', soLe);