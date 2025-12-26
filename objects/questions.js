const data = {
    user: {
        profile: {
            personal: {
                name: "John",
                age: 30,
                address: {
                    city: "New York",
                    zip: "10001"
                }
            }
        }
    }
};

const obj = {
    a: 1,
    b: 2,
}


const nestedArr = [
    [
        ["a", "b"],
        ["c", "d"]
    ],
    [
        ["e", "f"],
        ["g", ["h", ["i", "j"]]]
    ]
];

function createDeep(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    const keys = Object.keys(obj)
    for (let key of keys) {
        copy[key] = createDeep(obj[key])
    }
    return copy
}

// const copy = createDeep(data)
// copy.user.profile.personal.name = "chnad"
// copy.user.profile.personal.address.city = "virndavan"

// console.log(copy)
// console.log(data)

const arrCopy = createDeep(nestedArr)
console.log(arrCopy)