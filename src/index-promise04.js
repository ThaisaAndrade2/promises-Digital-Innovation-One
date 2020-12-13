const coinFlip = (n) => new Promise((resolve, reject) => setTimeout( n > 0 ? resolve('Yay') : reject('Oops'), 2000))
    
console.log('Begin\n')
const promiseArray = []
for(let i = 1; i <= 4; i++) promiseArray[i -1] = coinFlip(Math.random());

Promise.all(promiseArray)
    .then(console.log)