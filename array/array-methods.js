const arrr = new Array(1, 2, 2, 2,)


// array concat
const num1 = [[1], [2]]
const num2 = [1, 2, [3]]
// console.log(num1.concat(num2))


// Arry entries 

const itrator = arrr.entries()
// console.log(itrator.next().value)


// every method 

const fruits = ["apple", "mango", "banana"];
// console.log(fruits.every((fruit) => fruit.length > 3))

const filtered = [22, 333, 9, 76, 87, 55, 7, 446, 765].filter((el) => el < 10)
// console.log(filtered)


function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

const arry = [...Array(100).keys()].map(n => n + 1);

// console.log(arry)

const primeNumbersArry = arry.filter(isPrime)
//console.log(primeNumbersArry)
// console.log(isPrime(11))


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 15 },
    { name: "oranges", quantity: 8 },
    { name: "grapes", quantity: 12 },
    { name: "mangoes", quantity: 3 },
];

// console.log(inventory.find((fruit) => fruit.name === "bananas"))



// it runs in reverse order
console.log(inventory.findLast((fruit) => fruit.quantity > 10))

const products = [
    { name: "A", price: 300 },
    { name: "c", price: 100 },
    { name: "c", price: 1000 },
    { name: "D", price: 200 },
    { name: "E", price: 30 },
    { name: "F", price: 250 },
    { name: "G", price: 230 },
];

const sorted = products.sort((a, b) => {
    return a.price - b.price
})

// console.log(sorted)


