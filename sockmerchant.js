
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var pairsFound = 0;
    var pairs = [];
	let i = 0;
	do{
		console.log(i);
        if(pairs.length === 0) {
            pairs.push(ar[i]);
			console.log('ar before', ar);
			console.log('adding ' + ar[i] + ' to pairs');
			ar.splice(i, 1);
			console.log('ar now', ar);
			console.log('\n\n');
			i = 0;
			continue;
        }
		
		if(pairs.length == 1 && ar.includes(pairs[0])) {
			let index = ar.indexOf(pairs[0]);
			pairs.push(ar[i]);
			console.log('pairs found '+pairs + ' at index ' + i);
			pairsFound++;
			ar.splice(index, 1);
			i = 0;
			pairs = [];
			console.log('ar is now', ar);
			console.log('\n\n');
			continue;
		}else {
			pairs = [];
			i = 0;
		}
		
	}while(ar.length != 0);
	
	return pairsFound;
}

//console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3 ]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

