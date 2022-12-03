const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3); //orange banana lemon

const [a,b,c,d]= friends
console.log(a,b,c,d) //john peter bob anna

const[k,,l,,e]=friends
console.log(k,l,e) //john bob kelly

//Swap variables
let first = 'bob';
let second = 'john';

let t= second;
second = first;
first = t;
console.log(first, second); //john bob

[first,second] = [second,first]
console.log(first, second); //bob john