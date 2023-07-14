const http = require(`http`);

const server = http.createServer((req, res) => {
    if(req.url === `/`){
        res.write(`Home Page`);
        res.end();
    }
    else if(req.url === `/about`){
        res.write(`About Page`);
        res.end();
    }
    else
    {
        res.write(`<h1>Error Occured</h1>
        <a href='/'>Home</a>`);
        res.end();
    }
});

server.listen(5000);