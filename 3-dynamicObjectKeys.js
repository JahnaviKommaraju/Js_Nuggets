//dot notation
const person={
    name:'john',
};
console.log(person.name);
person.age=25;
console.log(person); //{name:'john', age: 25}

//square bracket notation

const items={
    'featured-items':['item1','item2'],
};

console.log(items['featured-items']); //['item1','item2']
console.log(person['name']); //john

let appState ='loading';
appState='error';
const keyName='computer';
const app={
    [appState]:true,
};
app[keyName]='apple';
console.log(app); //{error: true, computer: 'apple'}

const state={
    loading: true,
    name:'',
    job:''
}

function updateState(key,value){
    state[key]=value
}

updateState('name','john');
updateState('job','developer');
updateState('loading',false);
console.log(state) //{loading: false, name: 'john', job: 'developer'}
updateState('products',[]);
updateState('name','bob');
console.log(state) //{loading: false, name: 'bob', job: 'developer', products:[]}
