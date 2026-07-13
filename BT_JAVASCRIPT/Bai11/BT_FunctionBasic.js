// 1. Tạo function greet(name)
//way1: 
function greet (name) {
    return 'Hello, ' + name + '!';
};
console.log('greet:', greet('JavaScpript'));
console.log(greet('JavaScript'));

//way2: 
function greetNew(name) {
    return `Hello, ${name}!`;
};
console.log('greet:', greetNew('JavaScript'));



// 2. Tạo function add(a, b)
function add (a, b) {
    return a+b;
};
console.log('add:', add(5,3));

// 3. Tạo function isEven(num)
function isEven (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log('isEven:', isEven(24));


