
var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
	fs.readFile(path, null, function(err,data) {
			if (err) {
				response.writeHead(404);
				response.write('File not found');
			}
			else {
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.write(data);
			}
			response.end();
	});
}

module.exports = {
	handleRequest: function (request, response) {
		var path = url.parse(request.url).pathname;
		if (path == '/') {
				renderHTML('./index.html', response);
		}
		else if (path == '/account') {
				renderHTML('./account.html', response);
		}
		else {
			renderHTML('', response);
		}
	}
}
