const http = require('http')
const port = 8000


function responseHandler (request,response){
    
    response.write("hello world")
    response.end()
}

//const server = http.createServer(responseHandler)

/*
http.createServer(function (req,res){
    res.write("hello world")
    res.end();
})
*/
const server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write('okay')
    res.end()
    console.log(req.url)
})
server.listen(port)