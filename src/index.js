// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const money = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    }

    if (currency <= 0)
    
    return {};

    else if (currency > 10000)

    return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    else {

    let tempMoney = currency;

    let count = {};

    for (let key in money)
    {
        if (tempMoney >= money[key]) {
        count[key] = parseInt(tempMoney / money[key]);
        tempMoney = tempMoney - (count[key] * money[key]);
        }
    }

    return count;

    }

} 
    
