// async / await - allows us to write async code in synchronous fashion
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

/////### basic example for async-await
// const example = async ()=>{
//     return 'hello there'
// }

// async function someFunc() {
//     const result = await example() //waits till promise is settled/resolved from example and then uses the value in it but not uses .then()
//     console.log(result)
// }

//console.log(example()) //returns Promise {}
//someFunc()


/////### example for async-await
const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
  ]
  
  const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
  ]

// getUser('susan')
// // getUser('bob')
//   .then((user)=>{console.log(user)})  //{id: 2, name: 'susan'}
//   .catch((err)=>{console.log(err)}) //No such user bob

// getUser('john')
//   .then((user)=>getArticles(user.id))
//                         .then((articles)=>console.log(articles)) //['one', 'two', 'three']
//   .catch((err)=>{console.log(err)})

//####the above code is involving lot of chaining(i.e nesting of callback functions) so we use aync and await
// const getData = async ()=>{
//   const user = await getUser('john')
//   console.log(user) //{id: 1, name: 'john'}
//   if(user){
//     const articles= await getArticles(user.id)
//     console.log(articles) //['one', 'two', 'three']
//   }
// }

////// to catch errors we use try-catch for the above code
const getData = async ()=>{
  try {
    const user = await getUser('john')
  console.log(user) //{id: 1, name: 'john'}
    const articles= await getArticles(user.id)
    console.log(articles) //['one', 'two', 'three']
  } 
  catch (error) {
    console.log(error) //No such user joh
  }
}

getData()

function getUser(name){
  return new Promise((resolve,reject)=>{
    const user = users.find((user)=>user.name===name)
    if(user){
      return resolve(user)
    }
    else{
      reject(`No such user ${name}`)
    }
  })
}

function getArticles(userId){
  return new Promise((resolve, reject)=>{
      const userArticles = articles.find((user)=>user.userId===userId)

      if (userArticles){
          return resolve(userArticles.articles)
      }
      else{
        reject(`No articles with this userID`)
      }
  })
}