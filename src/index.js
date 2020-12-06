const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function callback(err, data){
    if(err) throw err
    console.log(data.toString())
}

/*Forma Síncrona

console.log('Begin')
const content = fs.readFileSync(path.resolve(basePath, 'invictus.txt'));
console.log(content.toString());

console.log('End');

//percorrendo outros arquivos e exibindo sequencialmente

console.log('Begin');

const files = fs.readdirSync(path.resolve(basePath));
const sentences = files.filter((file) => /a[1-4].txt/gi.test(file));

for (const sentence of sentences) {
    const text = fs.readFileSync(path.resolve(basePath, sentence)).toString();
    console.log(text);
}

console.log('End');*/


/*Forma assíncrona
console.log('Begin')

fs.readFile(path.resolve(basePath, 'invictus.txt'),callback)

console.log('End')

percorrendo outros arquivos e exibindo sequencialmente
console.log('Begin')

const files = fs.readdirSync(path.resolve(basePath));
const sentences = files.filter((file) => /a[1-4].txt/gi.test(file));

for (const file of sentences) {
   fs.readFile(path.resolve(basePath, file), callback)
}

console.log('End')*/

/* Forma assíncrona2
console.log('Begin')
fs.readdir(path.resolve(basePath), (err, files) => {
    if(err) throw err
    files
    .filter((file) => /a[1-4].txt/gi.test(file))
    .forEach((sentenceFile) => {
        fs.readFile(path.resolve(basePath, sentenceFile), callback)
    })
})
console.log('End')*/


function callback(err, data, index, max){
    if(err) throw err
    console.log(data.toString())
    return start(index +1, max)
}


console.log('Begin\n')
start(1, 4)

function start (index, max){
    if (index > max) return console.log('\nEnd')
    fs.readFile(
        path.resolve(basePath, `a${index}.txt`),
        (err, data) => callback(err, data, index, max)
    )
}