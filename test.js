function arrayManipulation(n) {
	for (var i=1; i < n; i++){
	    if (i % 15 == 0) console.log("FizzBuzz");
	    else if (i % 3 == 0) console.log("Fizz");
	    else if (i % 5 == 0) console.log("Buzz");
	    else console.log(i);
	}
}

// 5 3
// 1 2 100
// 2 5 100
// 3 4 100

console.log(arrayManipulation(15));
