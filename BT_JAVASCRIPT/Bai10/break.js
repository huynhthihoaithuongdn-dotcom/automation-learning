// break: thoat khoi mot vong lap

let n=0;
while (n < 5){
    n++; 
    if (n===3) {
        break
    };
    console.log(n);
}

for (let i=5; i<=10; i++){
    if (i % 2 === 0){
        console.log('first number: ', i); break
    }
}


let number= 1234;
switch (number % 2) {
    case 0: console.log('so chan') ; break;     // number % 2 === 0 ---> so chan (chia het cho 2)
    case 1: console.log('so le') ; break;       // number % 2 !== 0 ---> so le   (ko chia het cho 2)
    default: console.log('ko phai so');
}