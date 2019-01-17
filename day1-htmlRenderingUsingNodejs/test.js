const Path = require('path');
const fs = require('fs');

var templatepath = Path.join(__dirname, '/');
var fileReadStream = fs.createReadStream(templatepath + 'index.html');
var emailTemplate = '';
fileReadStream.on('data', function (buffer) {
    emailTemplate += buffer.toString();
});
                

fileReadStream.on('end', function (res) { //logopath
	var title = "Dynamic title coming here";
	var article = "<p><b> This text will be bold </> </p>"
	var sendStr = emailTemplate.replace('{{title}}',title).replace('{{content}}',article);
	console.log(sendStr);
});
                 