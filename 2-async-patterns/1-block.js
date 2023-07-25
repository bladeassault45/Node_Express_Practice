const http = require(`http`);

const server = http.createServer((req, res) => {
    if(req.url === `/`){
        res.end(`Home Page`);
    }
    else if(req.url === `/about`){
        for(let i = 0; i < 1000; i++)
        {
            for(let j = 0; j < 1000; j++)
            {
                console.log(`i = ${i}, j = ${j}`);
            }
        }

        res.end(`About Page`);
    }
    else
    {
        res.end(`404 Error`);
    }
});

server.listen(5000, () => {
    console.log(`Listening to port 5000`);
});