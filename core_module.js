const http = require('http');
const port = parseInt(process.env.port) || 4000;
//Create a web server
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Welcome Xola to node js module');
}).listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
//req.url