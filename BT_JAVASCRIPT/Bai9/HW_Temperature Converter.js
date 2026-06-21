let celsius = '25';
let fahrenheit = '77';

// Convert và tính toán

// Convert sang number nếu cần
celsius=Number(celsius)
fahrenheit=Number(fahrenheit)

// Tính toán chuyển đổi
toF = Math.round((celsius*9/5)+32)
toC = Math.round((fahrenheit-32)*5/9)

// Round kết quả đến 2 chữ số thập phân

// Display kết quả với console và HTML
// way1
console.log(celsius + '°C = ' + toF + '°F')
console.log(fahrenheit + '°F = ' + toC + '°C')

// way2

console.log(celsius + '°C = ' + Math.round((celsius*9/5)+32) + '°F')
console.log(fahrenheit + '°F = ' + Math.round((fahrenheit-32)*5/9) + '°C')