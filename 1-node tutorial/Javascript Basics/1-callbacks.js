const readFile = (cb) => {
    console.log(`Reading file started`);
    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            console.log(`i = ${i}, j = ${j}`);
        }
    }

    const data = `This is a file data`;
    cb(data);
};

readFile((data) => {
    console.log(data);
});