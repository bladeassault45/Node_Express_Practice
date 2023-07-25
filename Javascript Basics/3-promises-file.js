const fs = require(`fs`);

fs.promises.readFile(`./content/first.txt`, `utf-8`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))