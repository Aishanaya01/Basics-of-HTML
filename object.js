// Objects - A JavaScript object is a collection of named values
// const person={
//     firstname: 'Aish',
//     lastname: 'shukla',
//     age:       23,
//     hobbies:['music' , 'dancing'],
//     address: {
//      street: '50 main st',
//      city: 'kanpur'
//     }
// }
// person.email = 'aish@gmail.com',
// console.log(person);

const todos =[
    {
        id: 1 ,
        text: 'Aish' ,
        isCompleted: true
    },
    {
        id: 2 ,
        text: 'meet with friend' ,
        isCompleted: true
    },
    {
        id: 3 ,
        text: 'meet with my best friend' ,
        isCompleted: false
    }
];
//there is a little difference between objects and json format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
// console.log(todos);