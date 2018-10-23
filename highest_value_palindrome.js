function highestValuePalindrome(s, n, k) {
    var ch = s.split("");
    var changed = [];
    if (k > 0) {
        //first try to achieve palindrome if input is not a palindrome
        for (var i = 0; i < (n / 2); i++) {
            if (ch[i] != ch[n - i - 1] && k > 0) {
                k -= 1;
                var c = '' + Math.max(ch[i], ch[n - i - 1]);
                ch[i] = ch[n - i - 1] = c;
                changed[i] = 1;
            }
        }
        // check for maximum value palindrome
        if (k > 0) {
            for (var i = 0; i < (n / 2); i++) {
                //since we have changed ch[i] or ch[n-i-1],check whether it is optimal change or not
                if (k > 0 && changed[i] == 1 && ch[i] != '9') {
                    ch[i] = ch[n - i - 1] = '9';
                    k -= 1;
                }
                else if(k>=2 && ch[i]!='9')
                {
                    ch[i]=ch[n-i-1]='9';
                    k-=2;
                }
            }
            if(n % 2!=0 && k > 0)
                ch[''+(n/2)]='9';
        }
    }
    for(var i=0;i<(n/2);i++)
        if(ch[i]!=ch[n-i-1])return "-1";

    if(s.length === 1)
        return 9;


    return ch.join("");
}

console.log(highestValuePalindrome("12321", 5, 1));