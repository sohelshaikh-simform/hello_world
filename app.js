const http = require('http');
// con
const fs=require('fs')
const port = 8000;

const server = http.createServer((req, res) => {
    
    switch (req.url) {
        case '/':
            fs.readFile(`${__dirname}/hello.html`,'utf-8',(err,data)=>{
                res.end(data)
            })
            break;

        default:
            res.writeHead(404);
            res.end("page not found")
            break;
    }
   
})

server.listen(3000, "localhost", () => {
    console.log("listennig on 7000");
});
