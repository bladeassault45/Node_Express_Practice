const EventEmitter = require(`events`);

const clickEvent = new EventEmitter();

clickEvent.on(`click`, () => {
    console.log(`Click event happened`);
});

clickEvent.emit(`click`);