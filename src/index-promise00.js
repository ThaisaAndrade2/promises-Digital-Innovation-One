const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function readFileAsync(path, options){
    return new Promise((resolve, reject) =>{
        fs.readFile(path, options, (err, data) => {
            if (err) return reject(err)
            return resolve(data)
        })
    })
}

console.log('Begin')

readFileAsync(path.resolve(basePath, 'invictus.txt'),)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log('Oops', err))
console.log('End')