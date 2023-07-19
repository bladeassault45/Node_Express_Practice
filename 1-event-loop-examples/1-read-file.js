const fs = require(`fs`);

console.log(`Starting first task`);

fs.readFile(`./content/first.txt`, `utf-8`, (err, data) => {
    if(err)
        return;
    
    console.log(data);
});

console.log(`Starting next task`);