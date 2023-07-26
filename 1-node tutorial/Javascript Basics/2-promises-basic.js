function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const testPromise = new Promise((resolve, reject) => {
    const randNumber = getRandomInt(2);

    if(randNumber == 0)
    {
        reject(randNumber);
    }
    else
    {
        resolve(randNumber);
    }
});

testPromise
    .then((data) => console.log(`Promise resolved successfully. ${data}`))
    .catch((data) => console.log(`Prommise not resolved. ${data}`));