var jsonexport = require('jsonexport');
var fs = require('fs');
 
var reader = fs.createReadStream('input.json');
var writer = fs.createWriteStream('out.csv');
 
reader.pipe(jsonexport()).pipe(writer);