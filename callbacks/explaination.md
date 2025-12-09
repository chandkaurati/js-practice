# Callbacks in JavaScript

## What's a Callback Anyway?
A callback is just a function you pass into another function as an argument. That function will then "call back" your function when it's done doing its thing. It's like saying "here, take this function and run it when you're ready."

## The Async Callback Pattern

### Getting User Data
```javascript
function getUser(id, callback) {
    setTimeout(() => {
        if (id) {
            const user = { id: id, name: "user one" };
            callback(null, user);
        } else {
            callback("invalid user id", null)
        }
    }, 1000);
}
```

This function simulates fetching data from a server. The `setTimeout` creates a 1-second delay - just like a real API call would take some time. Notice how the callback gets called with two arguments: error first, then the actual data. This is super common in Node.js and older JavaScript code.

If there's a valid ID, we get `callback(null, user)` - no error, here's your user.
If not, we get `callback("invalid user id", null)` - here's the error, no user for you.

### The Toast Helper
```javascript
function toast(user) {
    alert("alert called" + user.name);
    console.log('user called', console.log(user))
}
```

This is just a simple function that shows an alert with the user's name. Nothing fancy, but it demonstrates how you can pass any function as a callback.

## Synchronous Callbacks

```javascript
document.getElementById("btn").addEventListener('click', () => {
    getUser(1, toast)
})
```

This is a sync callback in action. When you click the button, the event listener immediately fires the callback function. No waiting, no delays - it happens right then and there.

## Building the Chain

I created three functions that depend on each other:

**getUser** → takes an ID, returns user info
**getOrders** → takes a userId, returns that user's orders  
**getOrderDetails** → takes an orderId, returns details about that specific order

Each one uses `setTimeout` to fake the delay you'd see with real database calls or API requests. They all follow the same error-first callback pattern.

```javascript
function getOrders(userId, callback) {
    setTimeout(() => {
        if (userId) {
            const orders = [
                { orderId: "q124", product: "Laptop", userId: userId },
                { orderId: "q125", product: "Mouse", userId: userId }
            ]
            callback(null, orders)
        } else {
            callback("invalid user id", null)
        }
    }, 1000);
}
```

## Welcome to Callback Hell

Now here's where it gets ugly. To get order details, I need to:
1. First get the user
2. Then use that user's ID to get their orders
3. Then use the first order's ID to get its details

With callbacks, that looks like this:

```javascript
getUser(2, (err, user) => {
    if (err) {
        console.error(err)
        return;
    }
    getOrders(user.id, (err, orders) => {
        if (err) {
            console.log(err)
            return
        }
        getOrderDetails(orders[0].orderId, (err, details) => {
            if (err) {
                console.error(err)
            } else {
                console.log(details)
            }
        })
    })
})
```

See that pyramid shape? That's callback hell, also called the "pyramid of doom." 

### Why This Sucks
- Hard to read - you're reading diagonally instead of straight down
- Error handling is everywhere - same `if (err)` check at every level
- Adding more steps? Good luck finding where to nest the next callback
- Debugging is a pain - try figuring out which callback failed when something breaks

### The Error-First Pattern
Notice every callback starts with `(err, data)`? This is a convention that came from Node.js:
- First parameter = error (null if everything's fine)
- Second parameter = the actual data (null if there was an error)

It's predictable, which is nice, but it also means you're writing `if (err)` blocks everywhere.

## What People Do Now

These days, nobody writes callbacks like this anymore. We've got better tools:

**Promises** - Let you chain operations with `.then()` instead of nesting
**Async/Await** - Makes async code look and feel like regular synchronous code

But understanding callbacks is still important because:
- Tons of old code still uses them
- Promises and async/await are built on top of callback concepts
- Event listeners and some APIs still use callback patterns

## Running This Code

Just drop this in a `<script>` tag or a .js file. The callback hell example runs automatically. If you want to test the button example, uncomment that code and add a button with `id="btn"` to your HTML.

The console will show you the full flow - user data, orders, then order details. Each step takes 1 second, so you'll see them appear one by one.

---

This is legacy stuff now, but it's worth understanding before you move on to Promises and async/await. You'll appreciate the newer syntax way more once you've dealt with callback hell.