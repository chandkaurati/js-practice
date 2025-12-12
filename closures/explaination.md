# Closures in JavaScript

## What's a Closure?

A closure is when a function "remembers" variables from the place where it was created, even after that place is gone. It's like the function has a backpack with all the variables it needs.

Simple rule: **Inner functions have access to outer function variables.**

## Basic Counter Example

```javascript
function makeCounter() {
    let count = 0; // private variable        
    return function () { // closure  
        count++;
        return count; // access to the private variable            
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### What's Happening Here?

When `makeCounter()` runs, it creates a `count` variable and returns a function. That returned function "closes over" the `count` variable - it keeps a reference to it.

Every time you call `counter()`, it increments the same `count` variable. The variable doesn't disappear after `makeCounter()` finishes. It stays alive in the closure.

**Key point:** You can't access `count` directly from outside. It's private. The only way to change it is through the function that was returned.

## Multiplier Factory

```javascript
function createMultiplier(factor) {
    return function (x) { // closure
        return x * factor; // access to the factor variable
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

### The Factory Pattern

Each time you call `createMultiplier()`, it creates a new closure with its own `factor` value.

- `double` remembers `factor = 2`
- `triple` remembers `factor = 3`

They're completely independent. Each closure has its own private copy of the variable.

This is powerful because you can create specialized functions from a generic template. The `factor` stays locked in, and you just pass in the `x` value each time.

## Advanced: Data Privacy with Objects

```javascript
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
console.log(c.val()); // 1
c.inc();
c.inc();
console.log(c.val()); // 3
c.dec();
console.log(c.val()); // 2
```

### Why This Is Powerful

Instead of returning a single function, we're returning an object with multiple methods. All three methods share access to the same `count` variable through closures.

This is **true encapsulation**. There's no way to directly access or modify `count` from outside. You must use the provided methods:
- `inc()` - increment the counter
- `dec()` - decrement the counter  
- `val()` - get the current value

Try doing `c.count = 100` - it won't work. The variable is truly private. This pattern lets you control exactly how your data can be modified.

## Why Closures Matter

**Data Privacy** - Hide variables from the outside world. No one can mess with your internal state.

**Factory Functions** - Create multiple instances with their own private data.

**State Management** - Keep state that persists across function calls.

**Functional Programming** - Create specialized functions from generic ones.

## The Mental Model

Think of closures like this:

1. Function is created inside another function
2. Inner function gets a "backpack" with all the outer function's variables
3. Even when the outer function is done, the backpack stays with the inner function
4. Inner function can always reach into that backpack and use those variables

## Running the Code

Just paste the code in your browser console or a .js file. You'll see:
- The basic counter incrementing each time
- Different multipliers working independently
- The advanced counter with increment/decrement controls

Each example shows a different use case for closures, from simple state management to full data encapsulation.

---

Closures are everywhere in JavaScript. Event handlers, callbacks, React hooks - they all rely on closures. Once you get them, a lot of JavaScript patterns suddenly make sense.