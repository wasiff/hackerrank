function isValid(s) {
    var list = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in list) {
            list[s[i]] += 1;
        } else {
            list[s[i]] = 1;
        }
    }
    // var frequency = Object.values(list);   // EMCA Script 2017 :(
    var frequency = [];
    var lastIneq;
    var keys = Object.keys(list);
    // console.log(list)
    for (var i = 0; i < keys.length; i++) {
        frequency.push(list[keys[i]]);
    }
    var difference = (Math.max(...frequency) - Math.min(...frequency))
    var count=0;
    for (let i = 1; i < frequency.length; i++) {
        if (frequency[0] !== frequency[i]) {
            count ++;
            lastIneq = i;
        }
    }
    if(count <= 1){
        if(frequency[lastIneq] == 1 || difference <= 1){
            return "YES";
        }
        else{
            return "NO"
        }
    }
    else{
        return "NO";
    }
}

console.log(isValid("aabbcd"));