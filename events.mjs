import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

// Add new Listeners
myEmitter.on('timeout', () => {
    console.log('Timeout Event');
});

setTimeout(() => {
    myEmitter.emit('timeout');
}, 2000);