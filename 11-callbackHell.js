//Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

// btn.addEventListener('click',()=>{
//     console.log('Clicked button')
//     setTimeout(()=>{
//         first.style.color ='red'
//     },1000)
//     setTimeout(()=>{
//         second.style.color ='blue'
//     },3000)
//     setTimeout(()=>{
//         third.style.color ='green'
//     },3000)
// })  // Through this method, the colors will not appear in ordered sequence

//so to have ordered sequence,
btn.addEventListener('click',()=>{
    setTimeout(()=>{
        first.style.color ='red'
        setTimeout(()=>{
            second.style.color='blue'
            setTimeout(()=>{
                third.style.color='green'
            },3000)
        },2000)
    },1000)
})