function luckBalance(k, contests) {
    let important = contests.filter(ar => ar[1] === 1).length;
    let sumAll = contests.reduce((a, b) => a+b[0],0);
    let sorted = contests.sort((a, b) => a[0] - b[0])
    let win = important-k >=0 ?important-k : 0
    let min = 0
    for(let i=0;  i<sorted.length; i++){
        if(win === 0) break;
        if(sorted[i][1] === 0)continue;
        min += sorted[i][0];
        win--
    }
    return sumAll - (2*min);
}