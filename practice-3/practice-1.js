function counterMake() {
    let number=0;
    return function(num=0) {
        number=number + num
        return number;
    }
}
const counter = counterMake(); 
console.log( counter() ) // 0
console.log( counter() ) // 0
console.log( counter(1) ) // 1
console.log( counter() ) // 1
console.log( counter(3) ) // 4
console.log( counter(7) ) // 11
console.log( counter(-5) ) // 6