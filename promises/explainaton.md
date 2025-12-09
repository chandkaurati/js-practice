# Promises & Async/Await in JavaScript

## Escaping Callback Hell

Remember that nested callback nightmare? Promises fix that. They're JavaScript's way of saying "I promise to give you a result... eventually."

## What's a Promise?

A Promise is an object that represents a future value. It can be in one of three states:

- **Pending** - still working on it
- **Resolved** - got the result, here you go
- **Rejected** - something went wrong, here's the error

## Building Promises

### The Basic Structure

```javascript
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ name: "Chand", id: id });
      } else {
        reject("Invalid userId");
      }
    }, 1000);
  });
}
```

Instead of passing a callback, we return a Promise. Inside it, we get two functions:

- `resolve()` - call this when things work out
- `reject()` - call this when something breaks

The cool part? We don't need that error-first callback pattern anymore. Just resolve with data or reject with an error.

### The Other Functions

Same pattern for `getOrders()` and `getDetails()`:

```javascript
function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve([
          { orderId: "q124", product: "Laptop", userId: userId },
          { orderId: "q125", product: "Mouse", userId: userId },
        ]);
      } else {
        reject("invalid orderid");
      }
    }, 1000);
  });
}
```

Each function returns a Promise. Each Promise resolves with the data we need for the next step. Clean and predictable.

## Promise Chaining - The Better Way

Now instead of nesting callbacks, we chain with `.then()`:

```javascript
getUser(1)
  .then((user) => {
    console.log(user);
    return getOrders(user.id);
  })
  .then((orders) => {
    console.log(orders);
    return getDetails(orders[0].orderId);
  })
  .then((details) => {
    console.log(details);
  })
  .catch((err) => console.log(err));
```

### Why This Is Better

- **No more pyramid** - it reads straight down, not diagonally
- **One error handler** - that single `.catch()` at the end catches errors from ANY step
- **Clear flow** - user → orders → details, easy to follow
- **Easy to modify** - want to add another step? Just add another `.then()`

Each `.then()` gets the resolved value from the previous Promise. Whatever you return becomes the next Promise in the chain.

## Async/Await - The Even Better Way

Promises are great, but async/await makes them feel like regular synchronous code:

```javascript
async function getData(userId) {
  try {
    const data = await getUser(userId);
    const orders = await getOrders(data.id);
    const details = await getDetails(orders[0].orderId);

    console.log(data, details, orders);
  } catch (error) {
    console.log(error);
  }
}
```

### Breaking It Down

**`async` keyword** - marks a function as asynchronous. It automatically returns a Promise.

**`await` keyword** - pauses execution until the Promise resolves. Makes async code look synchronous.

**`try/catch`** - normal error handling, just like regular JavaScript. Way cleaner than chaining `.catch()`.

### Why Async/Await Wins

- Looks like normal code - no `.then()` chains
- Error handling is standard - just use try/catch
- Debugging is easier - stack traces make sense
- Variables stay in scope - no need to pass data through callbacks

## Comparing All Three Approaches

**Callback Hell:**

```javascript
getUser(1, (err, user) => {
  getOrders(user.id, (err, orders) => {
    getDetails(orders[0].orderId, (err, details) => {
      // finally got what we need
    });
  });
});
```

**Promise Chain:**

```javascript
getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => getDetails(orders[0].orderId))
  .then((details) => console.log(details))
  .catch((err) => console.log(err));
```

**Async/Await:**

```javascript
const user = await getUser(1);
const orders = await getOrders(user.id);
const details = await getDetails(orders[0].orderId);
```

The progression is clear. Each version solves the problems of the previous one.

## Important Notes

**await only works inside async functions** - you can't just slap await anywhere

**async functions always return Promises** - even if you return a regular value, it gets wrapped in a Promise

**Error handling matters** - with async/await, always use try/catch. With Promises, always add .catch()

**Sequential vs Parallel** - these examples run one after another. If your operations don't depend on each other, use `Promise.all()` to run them in parallel.

## Running This Code

Just paste it in your browser console or a .js file. You'll see the data appear in the console after each 1-second delay. Try calling `getData(1)` to see the async/await version in action.

The timing is the same for both methods (3 seconds total - 1 second per operation), but async/await reads way cleaner.

---

Promises solved callback hell. Async/await made Promises actually pleasant to work with. This is how modern JavaScript handles asynchronous operations, and it's honestly a game changer once you get used to it.
