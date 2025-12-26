// string reverse

const string = "hey this is moon & iam  working as frontend developer"
function myReverse(str) {
    // bruteForce
    // const arr = []
    // for(let i = string.length - 1 ; i >= 0 ; i--){
    //     arr.push(str[i])
    // }

    // return arr.join("")


    // optimized
    const stringArr = str.split("")
    let next = 0;
    let i = stringArr.length - 1;
    while (next !== i) {
        [stringArr[next], stringArr[i]] = [stringArr[i], stringArr[next]]
        next++
        i--
    }

    return stringArr.join("")

}


const reversed = myReverse(string)
console.log(reversed)


// palindrome
function isPalindrome(str) {
    if (typeof str !== "string") return false;
    let next = 0;
    let i = str.length - 1;
    while (next < i) {
        if (str[next] !== str[i]) {
            return false;
        }
        next++;
        i--;
    }
    return true;
}

console.log(isPalindrome("chand"))



