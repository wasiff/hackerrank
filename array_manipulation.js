function arrayManipulation(n, queries) {
    n = n.split(' ');
	var size = parseInt(n[0]);
	var num_of_operations = parseInt(n[1]);


	var arr = new Array(size);
	arr.fill(0);

	var resultArray = [];
	resultArray.push(arr);

	var largeNumbers = [];

	for(var opr = 0; opr < num_of_operations; opr++) {
		var from = parseInt(queries[opr][0])-1;
		var to = parseInt(queries[opr][1])-1;
		var add = parseInt(queries[opr][2]);

		var where_add_add = resultArray[resultArray.length-1];

		for(var f = from; f <= to; f++) {
			where_add_add[f] = where_add_add[f]+add;
		}

		largeNumbers.push(Math.max.apply(null, where_add_add));
	}
	return Math.max.apply(null, largeNumbers);
}

// 5 3
// 1 2 100
// 2 5 100
// 3 4 100

console.log(arrayManipulation('5 3',[[1,2,100],[2,5,100],[3,4,100]]));
