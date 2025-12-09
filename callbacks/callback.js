
// call back with asynchronous code
function getUser(id, callback) {
    setTimeout(() => {
        if (id) {
            const user = { id: id, name: "user one" };
            callback(null, user);
        } else {
            callback("ivalid user id", null)
        }
    }, 1000);
}

function toast(user) {
    alert("alert called" + user.name);
    console.log('user called', console.log(user))
}


// getUser(1,alert)

// call back with synchronous code

// document.getElementById("btn").addEventListener('click', () => {
//     getUser(1, toast)
// })


function getOrders(userId, callback) {
    setTimeout(() => {
        if (userId) {
            const orders = [{ orderId: "q124", product: "Laptop", userId: userId },
            { orderId: "q125", product: "Mouse", userId: userId }]
            callback(null, orders)
        } else {
            callback("invalid user id", null)
        }

    }, 1000);
}


function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        if (orderId) {
            // getting order details
            callback(null, { orderId: orderId, status: "shipped", product: [] })
        } else {
            callback("invalid user", null)
        }
    }, 1000);
}


// callback hell pyramid of doom
getUser(2, (err, user) => {
    if (err) {
        console.log("hi")
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
                // toast("your order status is " + details.status)
                console.log(details)
            }
        })
    })
})



// call back hell problem