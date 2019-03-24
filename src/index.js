// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins1 = { P : 0 };
    let coins5 = { N : 0 };
    let coins10 = { D : 0 };
    let coins25 = { Q : 0 };
    let coins50 = { H : 0 };
    
    let empty = {};
    if (currency = 0) {
        return empty;
    }

    let error = { error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency > 10000) {
        return error;
    }

 
    if (currency >= 50){
        coins50.H = coins50.H + 1;
        currency = currency - 50;
    } else if (currency >= 25){
        coins25.Q = coins25.Q + 1;
        currency = currency - 25;
    } else if (currency >= 10){
        coins10.D = coins10.D + 1;
        currency = currency - 10;
    } else if (currency >= 5){
        coins5.N = coins5.N + 1;;
        currency = currency - 5;
    } else if (currency >= 1){
        coins1.P = coins1.P + 1;;
        currency = currency - 1;
    } else {
        return;
    }

    currency = {coins1, coins5, coins10, coins25, coins50};
    return currency;
}
