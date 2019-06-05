const http = require('http')
const port = 9000
const url = require('url')


const server = http.createServer(function (req,res){
    const myURL = url.parse(req.url)
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write(myURL.pathname)
    res.end()
    //console.log(req.url)
})
server.listen(port)