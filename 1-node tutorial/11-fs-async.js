const fs = require(`fs`);

fs.readFile(`./content/first.txt`, `utf-8`, (err, data) => {
    if(err)
        throw err;
    
    console.log(data);
});

fs.readFile(`./content/second.txt`, `utf-8`, (err, data) => {
    if(err)
        throw err;
    
    console.log(data);
});

fs.writeFile(`./content/third.txt`, `This is third file.`, (err) => {
    if(err)
        throw err;
});

fs.readFile(`./content/random.txt`, `utf-8`, (err, data) => {
    if(err !== null)
        throw err;
    
    console.log(data);
})