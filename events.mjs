import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

// Add new Listeners
myEmitter.on('timeout', (secondsQuantity) => {
    console.log(`Timeout event in ${secondsQuantity} seconds`);
});

// emitter timeouts
setTimeout(() => {
    myEmitter.emit('timeout', 1);
}, 1000);

setTimeout(() => {
    myEmitter.emit('timeout', 2);
}, 2000);

// emit once
myEmitter.once('singleEvent', () => {
    console.log('Single Event');
});

setInterval(() => {
    myEmitter.emit('singleEvent');
},500);