//Js file to use libraries in easyhttp.js

const http=new easyhttp;

//Get posts(Normal printing of posts)
//http.get('https://jsonplaceholder.typicode.com/posts');


//Get posts by returning posts
http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
    if(err){
      console.log(err);
    }else{
      console.log(response);
    }
});

//Post posts

//Create data
// const data={
//   title:'Custom Post',
//   body:'This is a body part'
// };

// //Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });


//Put data

//Create data
// const data={
//   title:'Custom Post',
//   body:'This is a body part'
// };

//Put post
// http.post('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//     if(err){
//       console.log(err);
//     }else{
//       console.log(response);
//     }
// })

//Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// })
