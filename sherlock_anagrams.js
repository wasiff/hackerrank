function sherlockAndAnagrams(s) {
    var count = 0;
    var subs = generateSubstrs(s);

    var k = 0;

    while(k<subs.length){
        var z = k+1;
        while(subs[k] === subs[z]){
            count++;
            z++;
        }
        k ++;
    }
    return count;
}

function generateSubstrs(input){
    var substrings = [];
    for(var i=0;i<input.length;i++){
        for(var j=1; i + j <= input.length;j++){
            substrings.push(input.substr(i, j).split('').sort());
        }
    }
    substrings.sort();
    return substrings.map(function(el){return el.join('')});
}

console.log(sherlockAndAnagrams('mom'));
//console.log(sherlockAndAnagrams("abba"));
//console.log(sherlockAndAnagrams("abcd"));
//console.log(sherlockAndAnagrams("ifailuhkqq"));
//console.log(sherlockAndAnagrams("kkkk"));
//console.log(sherlockAndAnagrams("cdcd"));