const perf = require('execution-time')();
perf.start('call');
var i = 0;

var arr = [1,2,3,4,5,6,7,8,9]

for(i=0;i<arr.length;i++){
	perf.start('apiCall');
	console.log(arr[i]);
	const results = perf.stop('apiCall');
	console.log("Internal Loops :",results.verboseWords);
}

const finalresult = perf.stop('call');
console.log("External Loop :",finalresult.verboseWords);