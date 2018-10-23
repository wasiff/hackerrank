function commonChild(s1, s2) {
    var i,j;
    var m = s1.length;
    var row1 = [];
    var row2 = [];

    for(var i=0;i<=m;i++) row1[i] = 0;
    for(var i=1;i<=m;i++){
        for(var j=0;j<=m;j++){
            if(j==0) row2[j] = 0;
            else if(s1[i-1] == s2[j-1]) row2[j] = row1[j-1] + 1;
            else{
                if(row1[j] > row2[j-1]) row2[j] = row1[j];
                else row2[j] = row2[j-1];
            }
        }
        for(j=0;j<=m;j++) row1[j] = row2[j];
    }

    return row1[m];
}