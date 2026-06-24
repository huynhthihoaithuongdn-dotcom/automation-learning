// In số từ 1-20: chia hết 3&5→FizzBuzz, chia hết 3→Fizz, chia hết 5→Buzz, còn lại→số.


// way1: 
for (let i=1; i<=20; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {console.log(i)}
};


// way2: 
for (let i=1; i<=20; i++) {
    switch (true){
        case i % 3 === 0 && i % 5 ===0 :
            console.log('FizzBuzz');
            break;
        case i % 3 === 0:
            console.log('Fizz');
            break;
        case i % 5 === 0:
            console.log('Buzz');
            break;
        default: 
            console.log(i)
    };
};