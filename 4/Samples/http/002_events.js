// var http = require("http");

// var server = http.createServer(function(request, response) {
//     response.writeHead(300, {"Content-Type": "text/plain"});
//     response.write("Hello Worlddd");
//     response.end();

// }).listen(8080, function(){
//     console.log('Server running on port 8080');
// });

let http = require('http');
let server = http.createServer((request, response) => {
    
}).listen(8080, () => {
    console.log(`Server started on 8080`);
})



