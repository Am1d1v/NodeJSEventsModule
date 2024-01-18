import {EventEmitter} from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

// File Path
const filePath = 'text.txt'

// Events Listeners
// Write text data in file
fileEmitter.on('writeComplete', () => {
    console.log('Text File was written');

    // Add new text Data
    fs.appendFile(filePath, '\n New Data', () => {
        fileEmitter.emit('appendComplete');
        console.log(`Appended text to the ${filePath} file`);
    });
});

fileEmitter.on('appendComplete', () => {
    console.log('New Data was added');
})


fs.writeFile(filePath, 'Some Data Text', () => {
    fileEmitter.emit('writeComplete')
});