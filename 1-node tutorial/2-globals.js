//GLOBALS
//__dirname
//__filename
//setInterval

console.log(__dirname);
console.log(__filename);

//Can pass extra arguments to handler
setInterval((a, b) => {
    console.log(`a = ` + a);
    console.log(`b = ` + b);
}, 1000, 10, 12);