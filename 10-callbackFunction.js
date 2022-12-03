//callback function - a function that we pass it as an arugument and execute it later


// function makeUpperCase(value){
//     console.log(value.toUpperCase())
// }

const makeUpperCase=(value)=> console.log(value.toUpperCase())

//makeUpperCase('bob') //BOB

function handleName(value,cb)
{
    fullName= `${value} smith`
    cb(fullName)
}

const reverseString = (value)=> console.log(value.split('').reverse().join(''))
handleName('peter', makeUpperCase) //PETER SMITH
handleName('peter',reverseString) //htims bob

handleName('susan', (value)=>console.log(value))

const btn= document.querySelector('.btn');
btn.addEventListener('click',()=>console.log('button clicked'))