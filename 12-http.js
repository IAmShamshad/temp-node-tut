const http=require('http');


const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('welcome to our web page')
    }
    if(req.url==='/about')
    {
     res.end('here is the short briefing about our history');
    }

     res.end(`<h1>Oops </h1> <p> we cant seem to find the page you are looking for</p>
     <a href="/">back to home page</a>`)

})

server.listen(5000)