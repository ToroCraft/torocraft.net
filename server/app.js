var express = require('express');
var app = express();
var Techy = require('techy');


var webPath = __dirname + '/../web';
var simpleGit = require('simple-git')(__dirname + '/../');



function rebuildFiles(cb) {
	Techy(webPath, cb);
}


function pull(cb) {
	simpleGit.pull('origin', 'master', cb);
}

function pullAndBuild(cb) {
	pull(function () {
		console.log('done with pull');
		rebuildFiles(function () {
			console.log('updated and rebuilt');
			if(cb){
				cb();
			}
		});
	});
}



app.get('/update', function (req, res) {
	res.send('updating...');
	pullAndBuild();
});




app.use(express.static(webPath + '/_dist'));

console.log('started server on 8001   ', __dirname + '/../web/_dist');

pullAndBuild();


app.listen('8001');
