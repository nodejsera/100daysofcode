function prime(max){	
	for(var i = 2; i <= max; i++){		
			if(isPrime(i)){
				console.log(i + "  is a Prime Number");
			}
    }
}

function isPrime(val){
	//console.log("VALUE OF VAL",val);
	for(j=2;j<val;j++){
		if(val%j == 0){
			return false;
		}
	}
	return true;
}

prime(15);
