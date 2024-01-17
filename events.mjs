import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

const timeoutListenerFN = (secondsQuantity) => {
    console.log(`Timeout event in ${secondsQuantity} seconds`);
}

// Add new Listeners
myEmitter.on('timeout', timeoutListenerFN);

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

// Revome/Off Listener
setTimeout(() => {
    myEmitter.off('timeout', timeoutListenerFN);
}, 1500);











