const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))

/*coinFlip
    .then((data) => console.log(data, '1'))
    .then(() => console.log('End1'))
    .catch((err) => console.log('Erro1'))


coinFlip.then((data) => console.log('Yay 1'))
    .catch(() => console.log('Frist catch'))
    .then(() => { throw new Error('')})
    .catch((err) => console.log('Error in frist case, next then will not execute'))
    .then(() => console.log('End2'))



coinFlip.then((data) => console.log('Yay 2')).then(() => { throw new Error('xpto')}).catch(console.log)
coinFlip.then((err) => console.error('Next then will not execute'))
coinFlip.then(() => console.log('End2'))


coinFlip.then((data) => console.log(data))
    .catch((err) => { throw err})
    .then(() => console.log('End1'))

new Promise((resolve) => setTimeout(() => resolve(),2000)).then(() => console.log('Yay'))
console.log('test')


function start() {
    throw new Error('An error') 
}

console.log('Begin')
start()
console.log('End')
*/


coinFlip
    .then((data) => console.log('Yay 1'))
    .then(() => console.log('Result'))
    .then(() => console.log('End'))

coinFlip
    .catch(() => { throw new Error('Frist catch')})
    .catch(() => console.error('Error in frist case, next then will not execute'))
