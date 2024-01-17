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

myEmitter.on('newEvent', () => {
    console.log('New Event');
});

//Set Msx Listeners for the event
myEmitter.setMaxListeners(30);

setTimeout(() => {
    console.log(myEmitter.getMaxListeners());

    // Get array of events
    console.log(myEmitter.eventNames());
    myEmitter.emit('myEvent');
    myEmitter.emit('newEvent');
}, 1500);