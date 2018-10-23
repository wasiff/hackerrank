function substrCount(n, s) {
    var retVal = n;

    for (var i = 0; i < s.length; i++)
    {
        var startChar = s[i];
        var diffCharIdx = -1;
        for (var j = i + 1; j < s.length; j++)
        {
            var currChar = s[j];
            if (startChar === currChar)
            {
                if ((diffCharIdx === -1) ||
                    (j - diffCharIdx) === (diffCharIdx - i))
                    retVal++;
            }
            else
            {
                if (diffCharIdx === -1)
                    diffCharIdx = j;
                else
                    break;
            }
        }
    }
    return retVal;
}