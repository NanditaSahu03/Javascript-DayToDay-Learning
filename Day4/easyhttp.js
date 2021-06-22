//Using es5 (Libraries js file)
function easyhttp(){
  this.http=new XMLHttpRequest();
}

//Make http get request(Method 1 , not able to return self.http.responseText)
// easyhttp.prototype.get=function(url){
//    this.http.open('GET',url,true);

//    let self=this;
//    this.http.onload=function(){
//        if(self.http.status === 200){
//          console.log(self.http.responseText);
//        }
//    }

//    this.http.send();
// }

//Using callback for async methods()
//Get method
easyhttp.prototype.get=function(url,callback){
   this.http.open('GET',url,true);

   let self=this;
   this.http.onload=function(){
     if(self.http.status === 200){
       callback(null,self.http.responseText);
     }else{
      callback('Error :'+self.http.status);
     }
   }

   this.http.send();


}


//Post method
// easyhttp.prototype.post=function(url,data,callback){
//   this.http.open('POST',url,true);
//   //For headers
//   this.http.setRequestHeader('Content-type','application/json');

//   let self=this;
//   this.http.onload=function(){
//     callback(null,self.http.responseText);
//   }

//   this.http.send(JSON.stringify(data));
// }


//PUT method
// easyhttp.prototype.post=function(url,data,callback){
//   this.http.open('PUT',url,true);
//   //Header
//   this.http.setRequestHeader('Content-type','application/json');

//   let self=this;
//   this.http.onload=function(){
//     callback(null,self.http.responseText);
//   }
//   this.http.send(JSON.stringify(data));
// }


//Delete post
// easyhttp.prototype.delete=function(url,callback){
//   this.http.open('DELETE',url,true);
  
//   let self=this;
//   this.http.onload=function(){
//     if(self.http.status === 200){
//       callback(null,'Deleted Post');
//     }else{
//       callback('Error :'+self.http.responseText);
//     }
//   }
//   this.http.send();
// }
