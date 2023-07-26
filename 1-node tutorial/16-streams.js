const fs = require(`fs`);

//Reads data in chunks (default size is 64kb), thus optimizes memory usage.
const readBigFileStream = fs.createReadStream(`./content/bigfile.txt`);

readBigFileStream.on(`data`, (data) => {
    console.log(data);
});

readBigFileStream.on(`error`, (error) => {
    console.log(error);
});

