//Normal function
// const helloWorld = function(){
//   console.log('Hello');
// }


//One line function
//const helloWorld = () => console.log('Green');


//To return object
//const helloWorld = () => ({'title':'Horror'});

//Single param does not need paranthestis
// const helloWorld = name => console.log(`Hello ${name}`);
// helloWorld('Nandita');

//More than one param need paranthestis 
const helloWorld = (firstName,lastName) => console.log(`Hello ${firstName} ${lastName}`);
helloWorld('Nandita','Sahu')


//Put arrow functions for callback
const users=['Nandita','Sweta','Monika','Shibu'];
const nameLengths = users.map(name => name.length);
console.log(nameLengths);

