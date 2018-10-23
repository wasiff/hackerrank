function twoStrings(s1, s2) {
    let shareSub = false;
    for (var i = 0; i < s1.length; i++) {
        if(s2.includes(s1.charAt(i))) {
            shareSub = true;
            break;
        }
    }
    return shareSub ? "YES" : "NO";
}

console.log(twoStrings("hello","world"));
