//Printing pyramid in Node.js

const pyramid = (n)=>{
  const mid = Math.floor((2*n-1)/2);
  for(let row=0; row<n; ++row)
  {
    //for each row, make empty steps
    let level = ''
    for(let col=0; col<2*n-1; col++)
    {
      if(mid-row <=col && mid+row >= col)
        level+='*';
      else level +=' ';
    }
    console.log(level);
  }
}


const triangle = (n)=>{
    var totalNumberofRows = n;
    var output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+="*" + " ";
        }
        console.log(output);
        output="";
    } 
}



const reverseTriangle = (n)=>{
    var totalNumberofRows = n;
    var output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j =totalNumberofRows - 1; j >= i; j--) {
            output+="*" + " ";
        }
        console.log(output);
        output="";
    } 
}



function pyramid1 (n) {
  
  for (var i = 1; i <= n; i++) {
    var row = '';
    
    for (var j = 1; j <= (n - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}



function pyramid2 (n) {
  
  for (var i = 1; i <= n; i++) {
    var row = '';
    
    for (var j = 1; j <= (n - i + 1); j++) {
      row += '*';
    }
        
    console.log(row);
  }
}



function pyramid3 (n) {
  
  for (var i = 1; i <= n; i++) {
    var row = '';

    for (var j = 1; j <= (i - 1); j++) {
      row += ' ';
    }

    for (var j = 1; j <= (n - i + 1); j++) {
      row += '*';
    }
        
    console.log(row);
  }
}



function pyramid4(n) {
	var i ,j;
  for (i = 1; i <= n; i++) {
    var row = '';

    for (j = 1; j <= i; j++) {
      row += '*';
    }

    console.log(row);
  }
}
console.log("Pyramid ::::::::::::::::::::::::::::::::");
pyramid(5);
console.log("Triangle ::::::::::::::::::::::::::::::::");
triangle(5);
console.log("Reverse triangle ::::::::::::::::::::::::::::::::");
reverseTriangle(5);
console.log("Half Pyramid 1 ::::::::::::::::::::::::::::::::");
pyramid1(5);
console.log("Half Pyramid 2 ::::::::::::::::::::::::::::::::");

pyramid2(5);
console.log("Half Pyramid 3 ::::::::::::::::::::::::::::::::");

pyramid3(5);

console.log("Half Pyramid 4 ::::::::::::::::::::::::::::::::");

pyramid4(5);

