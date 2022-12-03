// cart example
const cart = [
    {
      title: 'Samsung Galaxy S7',
      price: 599.99,
      amount: 1,
    },
    {
      title: 'google pixel ',
      price: 499.99,
      amount: 2,
    },
    {
      title: 'Xiaomi Redmi Note 2',
      price: 699.99,
      amount: 4,
    },
    {
      title: 'Xiaomi Redmi Note 5',
      price: 399.99,
      amount: 3,
    },
  ]

let total  = cart.reduce((total,cartItem)=>
        {
            // total.totalItems+=cartItem.amount;
            // total.totalPrice+= cartItem.amount*cartItem.price;
                /////Or using Array destructuring
                const { amount, price } = cartItem
                total.totalItems += amount
                total.totalPrice += amount * price
            return total
        },
        {
            totalItems: 0,
            totalPrice: 0
        })

console.log(total) //{totalItems: 10, totalPrice: 5599.900000000001}
console.log(total.totalItems,total.totalPrice) //10 5599.900000000001
totalPrice = parseFloat(total.totalPrice.toFixed(2))
console.log(total.totalItems,totalPrice) //10 5599.9

// github repos example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async()=>{
    const response = await fetch(url)
    const data= await response.json()
    console.log(data) //(100) [{…}, {…}, {…}, {…}, ................]
    const newData= data.reduce((total,repo)=>
    {
        const {language} = repo
        if (language){
            if (total[language]){
                total[language]+=1
            }
            else{
                total[language]=1
            }
        }
        return total},{})

        // if (language) {
        //     total[language] = total[language] + 1 || 1
        //   }
        console.log(newData) //{JavaScript: 36, CSS: 45, HTML: 14, SCSS: 2}
}

fetchRepos()