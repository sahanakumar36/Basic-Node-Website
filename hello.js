/* 
URL Module Query String
var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var dates = q.weekday + ", " + q.month + " " + q.day + ", " + q.year;
    res.end(dates);
}).listen(8080); */

var http = require("http");
var fs = require("fs");
var url = require("url");
const PORT = process.env.PORT || 5000;

http
	.createServer(function (req, res) {
		var q = url.parse(req.url, true);
		var filename = "." + q.pathname;
		if (filename == "./") {
			filename = "./index";
		}

		filename = filename + ".html";
		fs.readFile(filename, function (err, data) {
			if (err) {
				res.writeHead(404, { "Content-Type": "text/html" });
				return res.end("404 Not Found");
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(PORT);

console.log("Listening on Port 8080...");
