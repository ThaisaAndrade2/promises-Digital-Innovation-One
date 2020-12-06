const fs = require('fs');
const path = require('path');
const basePath = './assets/';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 2000)
})

console.log('Begin')

//resultado no final da execução da promise sera data.
promise.then((data) => console.log(data)).catch((err) => {
    console.log('oops',err)
})

promise.then(console.log)

promise.then(a);
function a (text){
    console.log(text)
}

//formas equivalentes:
promise.then((resolve) => {}, (reject) => {})

promise.then((resolve) => {})
promise.catch((reject) => {})