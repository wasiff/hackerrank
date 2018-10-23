function makeAnagram(a, b) {
    var countA = a.length;
    var countB = b.length;
    b = b.split("");
    var count = countA + countB;
    var pair = 0;
    for(var i = 0; i < countA;i++){
        for(var j = 0; j < countB; j++){
            if(a[i] == b[j]){
                b.splice(j,1);
                pair++;
                break;
            }
        }
    }
    return count - (pair*2);
}

console.log(makeAnagram('abcd','abc'));