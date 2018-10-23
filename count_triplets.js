function countTriplets(arr, r) {
    let dict = {};
    let count = 0;
    arr.forEach(val=>{
        if (!dict[val]) {dict[val] = {s1:0,s2:0,s3:0};}
        if (!dict[val*r]) {dict[val*r] = {s1:0,s2:0,s3:0};}
        count += dict[val].s3;
        r===1 ? dict[val].s1 = 1 : dict[val].s1 += 1;
        dict[val*r].s3 += dict[val].s2;
        dict[val*r].s2 += 1;
    });
    return count;
}