const http = require("http");


const server= http.createServer((req,res) => {
    /*res.write("hola");
    res.end()*/
    if(req.url==='/'){
        res.end("hi you");
    }
    if(req.url==='/about'){
        res.end("hi again!!");
    }
    res.end(`<h1>Oops!</h1> please use this <a href="/">click here</a>`);
})
server.listen(5000);