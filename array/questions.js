const radius = [1, 2, 3]

// const calculateArea = function(redius){
//     const output = [];
//     for(let i = 0 ; i < redius.lenght ; i++){
//         output.push(Math.PI * redius[i]  * redius[i])
//     }
//     return output;
// }
// const calculateDiameter = function(radius){
//     const output = [];
//     for(let i = 0 ; i < radius.length ; i++){
//          output.push(2 * radius[i])
//     }
//     return output;
// }

// problem with this approach is we are repeating the same logic again and again

// solution to this problem is to use higher order function



const area = function (radius) {
    return Math.PI * radius * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (callback) {
    const output = [];
    return function (radius) {
        for (let i = 0; i < radius.length; i++) {
            output.push(callback(radius[i]))
        }
        return output;
    }

}

const calculateArea = calculate(area)
const calculateDiameter = calculate(diameter)
const areaOfCircle = calculateArea([1, 2, 3])
const diameterOfDCircle = calculateDiameter([1, 2, 3])
// console.log(diameterOfDCircle)


function findLargest(arr) {
    // let largest = 0;
    // for (let i = 0; i <= arr.length - 1; i++) {
    //     if (arr[i] > largest) {
    //         largest = arr[i]
    //     }
    // }


    // using reduce 
    // const largest = arr.reduce((acc, curr)=>{
    //   return acc = curr > acc ? curr : acc 
    // })


    // using sort
    const sorted = arr.sort((a, b) => a - b)

    return sorted[sorted.length - 1];
}

// console.log(findLargest([11,222,322,2,11,14343,25]))



function reverse(arr) {
    // bruteForece approach
    // const reversed = []
    // for(let i  = arr.length - 1 ; i >= 0  ; i--){
    //     reversed.push(arr[i])
    // }

    // return reversed

    // optimized approach 
    let reversed = [...arr]
    let right = reversed.length - 1;
    let left = 0;
    while (right > left) {
        [reversed[left], reversed[right]] = [reversed[right], reversed[left]]
        left++;
        right--;
    }
    return reversed;
}

// console.log(reverse(["chand", "kaurati", {}, [], null, undefined, 121]))

function myReverse() {
    let left = 0;
    let right = this.length - 1;

    while (right > left) {
        [this[left], this[right]] = [this[right], this[left]]
        left++
        right--
    }
}


Array.prototype.myReverse = myReverse

// const myaArr = [1, 2, 3, 4, 5]
// myaArr.myReverse()