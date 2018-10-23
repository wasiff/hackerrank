//always take on min and one max number and swap

function minimumSwaps(arr) {
	let i=0;
	  let counter=0;
	  let size=arr.length;

	  for(i=0;i<size-1;i++){
	    if(arr[i]!==i+1){  
	      let index = 0;
	      while(arr[index] !== i+1){
	        index++
	      }
	     let temp=arr[index]
	     arr[index]=arr[i]
	     arr[i]=temp
	      counter++
	    }
	  }
	  return counter;
}

console.log(minimumSwaps([ 4, 3, 1, 2 ]));
