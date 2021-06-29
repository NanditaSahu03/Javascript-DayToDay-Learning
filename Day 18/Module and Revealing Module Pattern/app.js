//Basic Structure
// (function(){
//   //Declare private vars and functions
//   return {
//     //Declare public vars and functions
//   }
// })();


//Standard Module Pattern
//Change h1 tag text
const UICtrl = (function(){
  let text = 'Hello Fellows';
  
  const changeText = function(){
    const element = document.querySelector('h1');
    element.textContent = text;
  }
  return{
    //Creating a new public function which is calling the private function
     callChangeText : function(){
       changeText();
       console.log(text);
     }
  }
})();

UICtrl.callChangeText();



//Revealing Module Patterns
const ItemCtrl = (function(){
   let data = [];

   function add(item){
     data.push(item);
     console.log('Item Added');
   }

   function get(id){
     return data.find(item => {
       return item.id === id;
     })
   }

   return{
     //Revealing the private functions
     add:add,
     get:get
   }
})();

ItemCtrl.add({id:1,name:'John'});
ItemCtrl.add({id:2,name:'Mark'});

console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
