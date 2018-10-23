function arrayManipulation(n) {
	// if (n < 2) {
// 	            return 0;
// 	        }
// 	        if (n == 2) {
// 	            return 1;
// 	        }
// 	        if (n % 2 == 0) {
// 	            return 0;
// 	        }
// 	        var limit = parseInt(Math.sqrt(n));
// 	        for (var i=3; i<=limit; i+=2) {
// 	            if (n % i == 0) {
// 	                return 0;
// 	            }
// 	        }
// 	        return 1;

// for(var i =2; i<n; i++)
//    {
//       if(n %i ==0)
// 	      {
// 		   return 0;
// 		  }
//     }
//   return 1;
//
// }
isPrime = 1;
for(var i=2;i<=n/2;i++)
{
   var temp = n%i;
   if(temp==0)
   {
      isPrime=0;
	  
	  for (var j = 2; j <= n / 2; j++) {
	              if (n % j == 0) {
	                  return j;
	              }
	          }
	  
      break;
   }
}
	
return isPrime;
}


// 5 3
// 1 2 100
// 2 5 100
// 3 4 100

console.log(arrayManipulation(4));
