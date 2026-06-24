// While Loop: kiem tra trc khi chay // 
/* while(DK)
    {
    <khoi lenh>
    }      */ 

/* Ktra DK, neu True -> thuc hien khoi lenh
    Tiep tuc quay nguoc lai ktra DK, neu True --> thuc hien khoi lenh  ---> cu lap lai
    Den khi ktra False ---> thoat khoi vong lap    */
   
/* cho i chay tu 1. Khi i van con <= 5 thi thuc hien khoi lenh cua while, tuc la in ra gia tri hien tai cua i va tang len 1 don vi. 
Sau do, quay lai ktra i <=5 */
let i=1;
while (i<=5){
    console.log(i)
    i++;   // i = i + 1
}                        // ktra --> in ra --> cong; data return 1 2 3 4 5

while (i<=5){
    i++
    console.log(i)
}                       // ktra i --> cong ---> in ra; data return 2 3 4 5 

// //vd2: enter pwd
let password = '';
while (password !== '123@'){
    password = prompt('enter pw again');
}
console.log('Access granted');