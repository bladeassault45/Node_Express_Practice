//EXAMPLE 1 - Pure promises
const {readFile} = require(`fs`);

let getTextPromise = new Promise((resolve, reject) => {
    readFile(`./content/first.txt`, `utf-8`, (err, data) => {
        if(err)
            reject(err);
        else
        {
            resolve(data);
        }
    });
});

getTextPromise
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


//EXAMPLE 2 - Promises from fs module
const {promises} = require(`fs`);

promises.readFile(`./content/first.txt`, `utf-8`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));



//EXAMPLE 3 - Async await pattern
const {readFile} = require(`fs`);

let getTextPromise2 = new Promise((resolve, reject) => {
    readFile(`./content/first.txt`, `utf-8`, (err, data) => {
        if(err)
            reject(err);
        else
        {
            resolve(data);
        }
    });
});

const funct = async () => {
    try {
        const firstData = await getTextPromise2;
        console.log(firstData);
    } catch (error) {
        console.log(error);
    }
    
};

funct();