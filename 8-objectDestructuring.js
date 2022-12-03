const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
      sister: 'jane',
    },
  };

const firstName = bob.first; 
const lastName = bob.last; 
const sister = bob.siblings.sister;

console.log(firstName,lastName,sister); // bob sanders jane

// const {f,l,c} = bob //unlike array destructuring we have to use the same notations
// console.log(f,l,c) //undefined undefined undefined

const {first,last,city}= bob;
console.log(first,last,city); //bob sanders chicago

// giving alias
const {first:f,last:l,city:c,siblings:{sister:fav}}= bob;
console.log(f,l,c,fav); //bob sanders chicago jane


function printPerson(person) {
    console.log(person.first); //bob

    const {first,last} = person;
    console.log(first,last); //bob sanders
  }

printPerson(bob);