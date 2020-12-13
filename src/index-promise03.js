const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const basePath = './assets/';

const readFileAsync = promisify(fs.readFile)

/*
console.log('Begin')
readFileAsync(path.resolve(basePath, 'invictus.txt'))
    .then((text) => console.log(text.toString()))
    .catch(console.error)
    .finally(() => console.log('End'))
*/


function read (index){
    return readFileAsync(path.resolve(basePath,`a${index}.txt`))
}

console.log('Begin\n')

/*function start(index, max){
    if(index > max) return
    read(index).then((data) => {
        console.log(data.toString(), '\n')
        start(index + 1, max)
    })
}

start(1, 4)
*/

//REFATORANDO FUNCTION ACIMA

const promiseArray = []
for(let i = 1; i <= 4; i++) promiseArray[i - 1] = read(i)

Promise.all(promiseArray)
    .then((arr) => console.log(arr.join('\n').toString()))
    .finally(() => console.log('\nEnd'))