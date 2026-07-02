// 1. Tạo function greet(name)
function greet (name) {
    return 'Hello, ' + name + '!';
};
console.log('greet:', greet('Javascpript'));
console.log(greet('Javascript'));

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
