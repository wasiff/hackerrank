function countSwaps(a) {
    let newArr = a.slice().sort(function (a, b) { return a - b; })
    let count = 0;
    for (let i = a.length-1; i >0; i--) {
        if (a[i] != newArr[i]) {
            let index = a.indexOf(newArr[i]);
            a.splice(index,1)
            a.push(a[i])
            count += i - index;
        }
    }
    console.log('Array is sorted in ' + count + ' swaps.');
    console.log('First Element: ' + Math.min(...newArr));
    console.log('Last Element: ' + Math.max(...newArr));
}