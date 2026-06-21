const productName = 'Laptop Dell';
let basePrice = '15000000';  // String!
const taxRate = 0.1;         // 10%
let discountPercent = '15';  // String!

// 1. Convert strings sang numbers
// ko nên thay đổi dữ liệu gốc --> tạo ra một biến mới
const basePrice_=Number(basePrice)
const discountPercent_=Number(discountPercent)

// 2. Tính thuế (tax)
// nên khai báo biến rõ ràng
const tax = basePrice_*taxRate

// 3. Tính giảm giá (discount)
// nên khai báo biến rõ ràng
const discount = basePrice_*(discountPercent_/100)

// 4. Tính tổng giá cuối (final price)
const finalPrice = basePrice_ + tax - discount

// 5. Format số với dấu phẩy (15,000,000)
formatPrice = finalPrice.toLocaleString()
console.log('Tong tien:', formatPrice)
