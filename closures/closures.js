// closures basic example
function makeCounter() {
    let count = 0; // private variable        
    return function () { // closure  
        count++;
        return count; // access to the private variable\            
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter());// 2
console.log(counter()); // 3


// closures advanced example

function createMultiplier(factor) {
    return function (x) { // closure
        return x * factor; // access to the factor variable
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

//advance example  data privacy 


function createCounter() {
    let count = 0;

    return {
        inc: () => ++count,
        dec: () => --count,
        val: () => count
    };
}

const c = createCounter();
c.inc();
console.log(c.val());