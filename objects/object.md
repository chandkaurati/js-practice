# JavaScript Objects

## *IMPORTANT: Radme is formatted by AI not CREATED *All Examples Are Self Written

Objects are basically containers that hold related data together. Think of them like a real-world object - a person has a name, email, address, etc. We group all that info in one place.

## Different Ways to Create Objects

JavaScript gives you multiple ways to create objects. Each has its own use case. Let's look at them one by one.

### 1. Object Literal (Most Common)
```javascript
const student = {
    name: "student",
    std: "5th",
    greet() {
        return `hey this is ${this.name}`
    }
}
```

This is the simplest way. Just write `{}` and put your key-value pairs inside. You can add methods (functions inside objects) directly. This is what you'll use 80% of the time.

**When to use:** When you need a single object or a simple data structure.

### 2. Constructor Function (Old School)
```javascript
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const myCar = new Car("bmw", "5series", 2026)
console.log(myCar.brand)  // bmw
```

This is the pre-ES6 way. You write a function (with capital first letter by convention) and use `new` to create instances. The `this` keyword refers to the new object being created.

**When to use:** When you need to create multiple objects with the same structure. But honestly, use classes instead (next example).

### 3. Class Syntax (Modern Way)
```javascript
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isLoggedIn = false;
    }
    
    login(name, password) {
        if (name === this.name && password === this.password) {
            this.isLoggedIn = true;
            console.log("user logged in successfully")
            return this.isLoggedIn
        } else {
            return "please enter valid credentials"
        }
    }
}

const user = new User("user1", "user@gmail.com", "user12345678")
user.login("user1", "user12345678")
```

This is just cleaner syntax for constructor functions. Under the hood, it's the same thing, but way easier to read and write. The `constructor` method runs when you create a new instance.

**When to use:** When you need multiple objects with the same structure and behavior. This is the modern standard.

### 4. Using new Object()
```javascript
const user2 = new Object()
user2.name = "user2"
user2.email = "user2@gmail.com"
```

You can create an empty object and then add properties one by one. It works, but it's verbose and nobody really uses this approach.

**When to use:** Almost never. Object literal `{}` is simpler.

### 5. Object.create() (Prototypal Inheritance)
```javascript
const user2 = {
    name: "user2",
    email: "user2@gmail.com"
}

const user3 = Object.create(user2)
user3.name = "user"
user3.email = "user3@gmail.com"
user3.greet = function() {
    return `hi i am ${this.name}`
}

console.log(user3.name)   // "user"
console.log(user3.email)  // "user3@gmail.com"
```

This creates a new object with `user2` as its prototype. If a property doesn't exist on `user3`, JavaScript will look for it on `user2`. It's useful for inheritance patterns.

**When to use:** When you want one object to inherit from another without using classes.

### 6. Factory Functions
```javascript
function createProduct(name, qty) {
    return {
        name,
        qty,
        inStock: true,
    }
}

const product1 = createProduct("laptop", 5)
const product2 = createProduct("phone", 10)

console.log(product1)  // { name: "laptop", qty: 5, inStock: true }
```

A factory function is just a regular function that returns an object. No `new` keyword needed. Simple and clean.

**When to use:** When you want to create objects without using classes or constructors. Good for encapsulation and when you don't need inheritance.

---

## Quick Comparison

| Method | Syntax | Use Case |
|--------|--------|----------|
| Object Literal | `{}` | Single objects, quick data structures |
| Constructor Function | `function + new` | Multiple instances (old way) |
| Class | `class + new` | Multiple instances (modern way) |
| new Object() | `new Object()` | Almost never use this |
| Object.create() | `Object.create()` | Prototypal inheritance |
| Factory Function | Regular function | Simple object creation without `new` |

**My advice:** Start with object literals for simple stuff. Use classes when you need multiple objects with methods. The rest you'll pick up as you need them.

---

## Basic Object Example
```javascript
const mykey = Symbol("key1")
const user = {
    id: "12$ff",
    name: "chand",
    email: "chand@gmail.com",
    ["isloggedIn"]: false,
    [mykey]: 'some val',
    address: {
        city: "wardha",
        zip: "442104",
        state: "mh"
    }
}

console.log(user.name)                // chand
console.log(user["isloggedIn"])       // false
console.log(user[mykey])              // some val

Object.freeze(user)
user.designation = "software engineer"
console.log(user)
```

## Breaking It Down

### Creating Properties

There are different ways to add properties to an object:

**Normal way:**
```javascript
name: "chand"
```
Just write the key and value. Simple.

**Square bracket way:**
```javascript
["isloggedIn"]: false
```
Square brackets let you use strings or variables as keys. Useful when the key name has special characters or spaces.

**Symbol as key:**
```javascript
const mykey = Symbol("key1")
[mykey]: 'some val'
```
Symbols create unique keys. They're hidden from normal loops and won't clash with other properties. Good for internal stuff you don't want others messing with.

### Nested Objects
```javascript
address: {
    city: "wardha",
    zip: "442104",
    state: "mh"
}
```
You can put objects inside objects. Address is itself an object with its own properties.

### Accessing Values

**Dot notation:**
```javascript
user.name  // Works when key is a simple word
```

**Bracket notation:**
```javascript
user["isloggedIn"]  // Works for any key
user[mykey]         // Must use brackets for Symbols
```

### Object.freeze()
```javascript
Object.freeze(user)
user.designation = "software engineer"  // This won't work!
```

`Object.freeze()` locks the object. After freezing:
- Can't add new properties
- Can't delete properties
- Can't change existing values

It's like putting the object in read-only mode. Once frozen, it stays frozen forever.

## When to Use What

- **Dot notation** - Use for simple property names
- **Bracket notation** - Use when key has spaces, special chars, or comes from a variable
- **Symbols** - Use for private/internal properties
- **Freeze** - Use when you want to make sure object won't change

---

## How Objects are Stored in Memory

This part confused me at first, but once you get it, a lot of weird JavaScript behavior starts making sense.

### The Two Memory Areas

JavaScript uses two places to store data:

1. **Stack** - Fast, small, stores simple values directly
2. **Heap** - Bigger, stores complex things like objects

### Primitives vs Objects

**Primitives (stored in Stack):**
```javascript
let name = "chand"
let age = 25
let isActive = true
```

These store the actual value directly. When you copy them, you get a real copy.
```javascript
let x = 10
let y = x      // y gets its own copy of 10
y = 20

console.log(x)  // 10 (unchanged)
console.log(y)  // 20
```

**Objects (stored in Heap):**
```javascript
let user1 = {
    name: "chand",
    age: 25
}
```

The actual object lives in the heap. The variable `user1` just holds an address (reference) pointing to where the object is stored.

### The Reference Thing

Here's where it gets interesting:
```javascript
let person1 = {
    name: "raj",
    city: "wardha"
}

let person2 = person1  // person2 doesn't get a copy!
                       // It gets the same address

person2.name = "amit"

console.log(person1.name)  // "amit" - Wait, what?!
console.log(person2.name)  // "amit"
```

Both `person1` and `person2` are pointing to the same object in memory. Change it through one, and you see the change through the other. They're like two names for the same thing.

### Visual Representation
```javascript
// What happens in memory:

let obj1 = { value: 100 }
// Stack: obj1 → [address: 0x001]
// Heap: 0x001 → { value: 100 }

let obj2 = obj1
// Stack: obj2 → [address: 0x001]  (same address!)
// Heap: 0x001 → { value: 100 }

obj2.value = 200
// Both obj1 and obj2 still point to 0x001
// Heap: 0x001 → { value: 200 }
```

### Making a Real Copy

If you actually want a separate copy, you need to do it explicitly:
```javascript
let original = {
    name: "chand",
    age: 25
}

// Shallow copy - creates new object
let copy1 = { ...original }
let copy2 = Object.assign({}, original)

copy1.name = "raj"

console.log(original.name)  // "chand" (unchanged)
console.log(copy1.name)     // "raj"
```

### The Nested Object Trap

Watch out for this one:
```javascript
let user = {
    name: "chand",
    address: {
        city: "wardha"
    }
}

let userCopy = { ...user }
userCopy.name = "raj"           // This works fine
userCopy.address.city = "nagpur"  // This changes original too!

console.log(user.address.city)  // "nagpur" - Surprise!
```

Why? Because the spread operator only makes a shallow copy. The nested `address` object is still a reference. Both `user` and `userCopy` point to the same address object in memory.

### Comparing Objects
```javascript
let a = { value: 10 }
let b = { value: 10 }
let c = a

console.log(a === b)  // false - different objects in memory
console.log(a === c)  // true - same reference
```

Even though `a` and `b` look identical, they're different objects stored at different memory locations. JavaScript compares the addresses, not the contents.

### Why This Matters

Understanding this helps you avoid bugs like:
```javascript
function updateUser(userObj) {
    userObj.name = "changed"  // This changes the original!
}

let myUser = { name: "chand" }
updateUser(myUser)
console.log(myUser.name)  // "changed"
```

When you pass an object to a function, you're passing the reference. The function can modify the original object.

---

**Bottom line:** Primitives give you copies. Objects give you references. Remember this and you'll save yourself from a lot of head-scratching moments.

---

That's pretty much it. Objects are just key-value pairs grouped together. Start simple, the rest will make sense as you use them more.