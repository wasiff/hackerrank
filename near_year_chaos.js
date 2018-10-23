
function minimumBribes(q) {
	var frequencies = [];
	var values = [];
	var count = 0;
	
	var chaotic = false;
	var sorted = false;
	
	while(!sorted) {
		for(var i = 0; i < q.length; i++) {
			if(q[i] > q[i+1]) {
				sorted = false;
				console.log(q[i] + ' is greater than ' + q[i+1]);
				var temp = q[i+1];
				q[i+1] = q[i];
				q[i] = temp;
				
				console.log('after shifting ' + q);
					
				var index = values.indexOf(q[i+1]);
				if(index >= 0) {
					if(frequencies[index]+1 > 2) {
						frequencies[index]++;
						chaotic = true;
						break;
					}
					frequencies[index]++;
					console.log('after incrementing in arrays ',frequencies,values);
				}else{
					values.push(q[i+1]);
					frequencies.push(1);
					console.log('after adding in arrays ',frequencies,values);
				}
				count++;
				console.log('\n\n');
			}else{
				const limit = q.length - 1;
				if(q.every((_, i) => (i < limit ? q[i] <= q[i + 1] : true))){
					sorted = true;
				}
				
			}
		}
	}
	
	
	if(chaotic) {
		console.log('Too chaotic');
	}else{
		console.log(count);
	}
}



minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]);
