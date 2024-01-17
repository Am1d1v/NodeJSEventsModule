import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

// Multiple Events
myEmitter.on('myEvent', () => {
    console.log('First Event Listener');
});
myEmitter.on('myEvent', () => {
    console.log('Secont Event Listener');
});
myEmitter.on('myEvent', () => {
    console.log('Third Event Listener');
});

setTimeout(() => {
    myEmitter.emit('myEvent')
}, 1500);