//Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('Sym2');

//Two symbols cannot be equal
console.log(`Hello ${sym1.toString()}`);

//Unique object keys
const key1 = Symbol();
const key2 = Symbol('sym2');

const obj={};
obj[key1]='props1';
obj[key2]='props2';
obj.key3='props3';
obj.key4='props4';

//Symbols are not enumerable for ... in
for (let i in obj) {
   console.log(`${i} : ${obj[i]}`);
}

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key:'prop1'}));
console.log(JSON.stringify({[Symbol(
  'sym1'
)]:'prop1'}));
