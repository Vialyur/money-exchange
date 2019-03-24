// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency > 10000) {
        return error;
    }

    if (currency <= 0){
        return {}
    }

    let coins = {
        P: 0,
        N: 0, 
        D: 0,
        Q: 0, 
        H: 0
	};

    while (currency > 0) {
        if (currency >= 50) {
            coins.H = coins.H + 1;
            currency = currency - 50;
        } else if (currency >= 25) {
            coins.Q = coins.Q + 1;
            currency = currency - 25;
        } else if (currency >= 10) {
            coins.D = coins.D + 1;
            currency = currency - 10;
        } else if (currency >= 5) {
            coins.N = coins.N + 1;
            currency = currency - 5;
        } else if (currency >= 1) {
            coins.P = coins.P + 1;
            currency = currency - 1;
        } 
    }
	
	if (!coins.P) {
		delete coins.P;
	}
	if (!coins.N) {
		delete coins.N;
	}
	if (!coins.D) {
		delete coins.D;
	}
	if (!coins.Q) {
		delete coins.Q;
	}
	if (!coins.H) {
		delete coins.H;
	}

    return coins;
}
