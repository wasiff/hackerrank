function maxMin(k, arr) {
    var minDiff = 9999999999;
    arr.sort();

    for(var i=k-1;i<arr.length;i++){
        var diff = arr[i]-arr[i-k+1];
        if(diff < minDiff) minDiff = diff;
    }

    return minDiff;
}

// only working in c++, may be because of long int