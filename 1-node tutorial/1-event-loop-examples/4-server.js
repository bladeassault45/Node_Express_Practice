const http = require(`http`);

const server = http.createServer((req, res) => {
    console.log(`This is home page.`);
    res.end(`This is home page.`);
});

server.listen(5000, () => {
    console.log(`Starting server at port 5000`);
});