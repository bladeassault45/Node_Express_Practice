const os = require(`os`);

//User info
console.log(os.userInfo());

//Uptime of the system
console.log(os.uptime());

const systemInfo = {
    osName: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(systemInfo);