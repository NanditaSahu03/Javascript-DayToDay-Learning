document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  //create an xhr object
  const xhr=new XMLHttpRequest();

  //Open 
  xhr.open('GET','data.txt',true);
  console.log('READY STATE',xhr.readyState);

  //Optional-Used for spinners loaders
  // xhr.onprogress=function(){
  //   console.log('READYSTATE',xhr.readyState);
  // }

  //Early Format instead of onload()
  // xhr.onreadystatechange=function(){
  //   if(this.status === 200 && this.onreadystatechange == 4){
  //     console.log(this.responseText);
  //   }
  // }

  //Reload function to get status
  xhr.onload=function(){
    //To check the status of xhr object
    console.log('READY STATE',xhr.readyState);
    if(this.status == 200){
      //console.log(this.responseText);
      document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;
    }
  }

  xhr.send();
}

/*Ready state 
0.Request not intialized 
1.Server Connection established
2.Request Received
3.Processing Request
4.Request Finished & Reponse is ready
*/
