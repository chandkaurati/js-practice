// promises
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve({ name: "Chand", id: id });
            } else {
                reject("Invalid userId")
            }
        }, 1000);
    })
}


function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId) {
                resolve([
                    { orderId: "q124", product: "Laptop", userId: userId },
                    { orderId: "q125", product: "Mouse", userId: userId }
                ]);
            } else {
                reject("invalid  orderid")
            }
        }, 1000);
    })
}


function getDetails(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderId) {
                resolve({ orderId: orderId, status: "Shipped", total: 1200 });
            } else {
                reject("ivalid orderid")
            }
        }, 1000);
    })
}


getUser(1)
    .then((user) => {
        console.log()
        return getOrders(user.id)
    }).then((orders) => {
        console.log(orders)
        return getDetails(orders[0].orderId)
    }).then((details) => {
        console.log(details)
    }).catch(err => console.log(err))


// using async await/better syntax

async function getData(userId) {
    try {
        const data = await getUser(userId)
        const orders = await getOrders(data.id)
        const details = await getDetails(orders[0].orderId)

        console.log(data, details, orders)
    } catch (error) {
        console.log(error)
    }
}


// getData(12)