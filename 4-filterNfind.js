// Filter - 
    //  returns a new array, 
    //  can manipulate the size of new array (unlike map),
    //  returns based on condition

// Find - 
    // returns single instance,
    // returns first match,
    // if no match - undefined

    const people = [
        { name: 'bob', age: 20, position: 'developer' },
        { name: 'peter', age: 25, position: 'designer' },
        { name: 'susy', age: 30, position: 'the boss' },
        { name: 'anna', age: 35, position: 'intern' },
      ];

////// filter

// const youngPeople = people.filter((person)=>{
//     return true; //[{ name: 'bob', age: 20, position: 'developer' },{ name: 'peter', age: 25, position: 'designer' },
//     //{ name: 'susy', age: 30, position: 'the boss' }, { name: 'anna', age: 35, position: 'intern' },]
// });

// const youngPeople = people.filter((person)=>{
//     return false; //[]
// });

const youngPeople = people.filter((person)=>{
//    if(person.age<30){
//     return person; //[{name: 'bob', age: 20, position: 'developer'},{name: 'peter', age: 25, position: 'designer'}]
//    }

        return person.age<30; //[{name: 'bob', age: 20, position: 'developer'},{name: 'peter', age: 25, position: 'designer'}]
});
console.log(youngPeople);

const developers = people.filter((person)=>person.position==='developer');
console.log(developers);

const peter = people.filter((person)=> person.name==='peter');
console.log(peter); //array of object[{name: 'peter', age: 25, position: 'designer'}]
console.log(peter[0].position); //designer

// filter - no match
const doctors = people.filter((person)=>person.position==='doctor');
console.log(doctors); //[]

const fruits=['apple','lemon','orange','grapes'];

// find
const susy = people.find((person)=> person.name==='susy');
console.log(susy);//{name: 'susy', age: 30, position: 'the boss'}
console.log(susy.position);//the boss

const fruit = fruits.find((item)=> item==='grapes');
console.log(fruit); //grapes

// find - no match
const oldPerson =people.find((person)=> person.age>35);
console.log(oldPerson); //undefined

// multiple matches - first match
const randomPerson = people.find((person)=>person.age<35);
console.log(randomPerson); //{name: 'bob', age: 20, position: 'developer'}