// Reduce - 2 parameters
// iterates over array, callback function
// reduces to a single value - number, array, object
// 1st parameter ('accumulator') - total of all calculations
// 2nd parameter ('current value') - current iteration/value

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

// const dailyTotal= staff.reduce(()=>{ alwasy return 1st-paramter}, 0) 
                        ////callback function and initial value of 1st parameter in callback fn

const dailyTotal= staff.reduce((total,person)=>{
  total+=person.salary;
  return total;
},0)

console.log(dailyTotal);


