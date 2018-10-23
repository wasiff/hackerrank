function countingValleys(n, s) {
    var level = 0, vallies = 0;
    var slopes = s.split("");
    for (var i in slopes) {
        level = (slopes[i] == 'U') ? level + 1 : level - 1;
        if (level === 0 && slopes[i] === 'U') {
            vallies++;                                  
        }
    }
    return vallies;
}