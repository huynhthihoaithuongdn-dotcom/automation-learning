/* Bài 3: Tạo nhánh feat/cloud-kingdom-2 (đứng từ nhánh main) và thực hiện yêu cầu sau:
- Tạo file tests/lesson-04/cloud-kingdom.js
- Khai báo:
   + Biến powerUp có giá trị là "mushroom”.
   + Sử dụng câu điều kiện if...else để xác định tên hiệu ứng tương ứng với các powerUp:
     > mushroom: "Mario becomes Super!" 
     > flower: "Mario can shoot fireba!!s!" 
     > star: "Mario is invincible!"
     > none: "Mario is normal"
     > Khác: "Unknown power-up"
   + In ra ngoài console hiệu ứng tên hiệu ứng. */ 


const powerUp = 'abc';

if (powerUp === 'mushroom') {
    console.log('Mario becomes Super!');
} else if (powerUp === 'flower') {
    console.log('Mario can shoot fireba!!s!');
} else if (powerUp === 'star') {
    console.log('Mario is invincible!');
} else if (powerUp === 'none') {
    console.log('Mario is normal');
} else {
    console.log('Unknown power-up');
};