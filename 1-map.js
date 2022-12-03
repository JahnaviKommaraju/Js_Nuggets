// Map
// for iterating over the original array
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const people =[
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'eve',
        age: 21,
        position: 'doctor'
    },
    {
        name: 'hannah',
        age:19,
        position:'student'
    }
]

// const ages= people.map(function(){}) #nrml fuction
//             or
const noparameter_objects= people.map(()=>{}) //arrow function without parameter
console.log(noparameter_objects) // depends on length of original array[undefined, undefined, undefined]

const objects= people.map((person)=>{
    console.log(person) //{name: 'bob', age: 20, position: 'developer'} {name: 'eve', age: 21, position: 'doctor'} {name: 'hannah', age: 19, position: 'student'}
})

const getAges= (person)=> person.age*2;
const ages= people.map(getAges); //callback fn
console.log(ages) // [40, 42, 38]

const newPeople = people.map((item)=>{  //return new object
    return {
        fName: item.name.toUpperCase(),
        age: item.age+20
    };
});
console.log(newPeople); //[{fName: 'BOB', age: 40},{fName: 'EVE', age: 41},{fName: 'HANNAH', age: 39}]

const names= people.map((person)=>`<h2>${person.name}</h2>`); //wrrapping in html,jsx
const result = document.querySelector('#result');
result.innerHTML= names.join('');