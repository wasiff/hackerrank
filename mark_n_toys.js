function maximumToys(prices, k) {
    let sum = 0;
    let toys = 0;

    while(sum <= k) {
        const p = Math.min.apply(null, prices);
        sum += p;
        if(sum > k) {
            break;
        }
        toys++;
        prices.splice(prices.indexOf(p), 1);
    }
    return toys;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));