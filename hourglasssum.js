
function hourglassSum(arr) {	
	var max;
	
	for (var i = 0; i < 4; i++) {
    	for (var j = 0; j < 4; j++) {
    		var current =
    			arr[i][j] + arr[i][j+1] + arr[i][j+2] +
    			           arr[i+1][j+1] +
    			arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
				if(max !== NaN && max !== undefined){
					max = Math.max(max, current);
				}else{
					max = current;
				}
    	}
		
    }
	return max;
}

// let test = [
// 	[1,1,1,0,0,0],
// 	[0,1,0,0,0,0],
// 	[1,1,1,0,0,0],
// 	[0,0,2,4,4,0],
// 	[0,0,0,2,0,0],
// 	[0,0,1,2,4,0]
// ];

// let test = [
// 	[-1, -1, 0, -9, -2, -2],
// 	[-2, -1, -6, -8, -2, -5],
// 	[-1, -1, -1, -2, -3, -4],
// 	[-1, -9, -2, -4, -4, -5],
// 	[-7, -3, -3, -2, -9, -9],
// 	[-1, -3, -1, -2, -4, -5]
// ];

let test = [
	[-1, 1, -1, 0, 0, 0],
	[0, -1, 0, 0, 0, 0],
	[-1, -1, -1, 0, 0, 0],
	[0, -9, 2, -4, -4, 0],
	[-7, 0, 0, -2, 0, 0],
	[0, 0, -1, -2, -4, 0]
];

console.log(hourglassSum(test))

