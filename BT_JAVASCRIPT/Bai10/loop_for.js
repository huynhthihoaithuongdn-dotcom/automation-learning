/* for ([khoi tao] ; [DK] ; [buoc lap]) 
    {
    <khoi lenh>
    }
*/

// cho i chay tu 0, den i < 5, moi lan lap tang bien i len 1. Sau do in gia tri cua i. 
for (let i=0; i<5; i++){
    console.log(i)
}

//vd2: xuat cac so chan tu 0 den 10     
// i +=2 > cong them 2 don vi
for (let i=0; i<=10; i+=2){
    console.log(i)
}

//vd3: tinh tong cac so chan tu 0 den 10
let tong = 0;
for (let a=0; a<=10; a+=2){
    tong += a   // tong = tong + a 
}
console.log('Tong cac so chan tu 0 den 10:', tong)

/* let tong = 0;
for (let a=0; a<=10; a+=2){
    console.log('Tong cac so chan tu 0 den 10: ', tong += a)
}
---> sai  */