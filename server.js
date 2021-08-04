const http = require('http');
const fs = require('fs');

function doOnRequest(request, response){
  // Send back a message saying "Welcome to Twitter"
  // code here...
  // response.end("yo")  
  if (request.method === 'GET' && request.url === '/') {
  let poemRead = fs.readFileSync('index.html', 'utf-8');
    response.end(poemRead)

  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    let message = 'hi back to you!'
    response.end(message);
    
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    
  }
  else {
    console.log('Error 404: page not found')
    // Handle 404 error: page not found
    // code here...
    
  }
}

const server = http.createServer(doOnRequest)

server.listen(3000);
