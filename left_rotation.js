
function rotLeft(a, d) {	
	var pops = a.splice(0, d);
	return [...a,...pops];
}

//rotLeft([1,2,3,4,5], 4);
console.log(rotLeft([1,2,3,4,5], 4))

