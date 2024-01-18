import {EventEmitter} from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

// Events Listeners
// Write text data in file
fileEmitter.on('writeComplete', () => {
    console.log('Text File was written');

    // Add new text Data
    fs.appendFile('./text.txt', '\n New Data', () => {
        fileEmitter.emit('appendComplete')
    });
});

fileEmitter.on('appendComplete', () => {
    console.log('New Data was added');
})


fs.writeFile('./text.txt', 'Some Data Text', () => {
    fileEmitter.emit('writeComplete')
});