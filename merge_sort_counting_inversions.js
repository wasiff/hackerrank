// SOLUTION 1 - HAS TIMEOUT

// function countInversions(arr) {
//     var inv_count = 0;
//     for (var i = 0; i < arr.length - 1; i++){
//         for (var j = i + 1; j < arr.length; j++){
//             if (arr[i] > arr[j])
//                 inv_count++;
//         }
//     }
//     return inv_count;
// }


// SOLUTION 2 - HAS FAILED SOME

var tally = 0;
// Complete the countInversions function below.
function countInversions(arr) {
    if (arr.length === 0 || arr.length === 1) return 0;
    //tally = 0;
    sort(arr); // merge sort the array and increment tally when there are crossovers
    return tally;
}

function sort(arr) {
    if (arr.length === 1) return arr;
    var right = arr.splice(Math.floor(arr.length/2), arr.length - 1);
    return merge(sort(arr), sort(right));
}

function merge(left, right){
    var merged = [];
    var l = 0, r = 0;
    var multiplier = 0;
    while (l < left.length || r < right.length){
        if (l === left.length){
            merged.push(right[r]);
            r++;
        } else if (r === right.length){
            merged.push(left[l]);
            l++;
            tally += multiplier;
        } else if (left[l] < right[r]) {
            merged.push(left[l]);
            tally += multiplier;
            l++;
        } else {
            merged.push(right[r]);
            r++;
            multiplier++;
        }
    }
    return merged;
}