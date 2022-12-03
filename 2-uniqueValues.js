// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];

//const categories = menu.map((item)=>item.category) //array of categories
//console.log(categories)

// const categories = new Set(menu.map((item)=>item.category)) //returns as an object
// console.log(categories) 

// const categories = [...new Set(menu.map((item)=>item.category))] //turns back into array
// console.log(categories)

const categories = ['all',...new Set(menu.map((item)=>item.category))]
console.log(categories)

const result= document.querySelector('#result')
result.innerHTML= categories
    .map((category)=>{
        return `<button>${category}</button>`;
    })
    .join('');