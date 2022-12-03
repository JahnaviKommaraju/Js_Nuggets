// Promises - an object that is expected to be returned later but not now
 
// to avoid callback hell
// allows us to write a async code in synchronous code
// async await
// consume/use promises

// Pending, Rejected, FulFilled

/////promise syntax:

        // var promise = new Promise(function(resolve, reject) {
        //     // do a thing, possibly async, then…
        
        //     if (/* everything turned out fine */) {
        //       resolve("Stuff worked!");
        //     }
        //     else {
        //       reject(Error("It broke"));
        //     }
        //   });

const promise = new Promise((resolve,reject)=>{
    resolve([1,2,3])
    // resolve('hello world')
    reject('there is an error')
})

console.log(promise)

//// .then() - method to access resolve
//           - 2 arguments for .then() 
//           - .then(cb-for-success, cb-for-failure)

//// .catch() - method to access reject

promise
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)})

// example
const val=2
const promise1 = new Promise((resolve, reject)=>{
    const random = Math.floor(Math.random()*3)
    console.log(random)

    if(val===random)
    {
        resolve('correct number')
    }
    else{
        reject('wrong number')
    }
})

console.log(promise1)
promise1
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)})