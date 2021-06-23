/**
 * EasyHTTP Library
 * Library for making HTTP requests 
 */

//Using Fetch API with Async and Await

class EasyHttp{
  //Make an Http get request
async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }



  //Make an Http post request
async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = await response.json();
      return resData;
  }



  //Make a Http put method
async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = await response.json();
      return resData;
  }


  
  //Make a Http delete request
async delete(url) {
      const response=await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      const resData = await 'Resource deleted';
      return resData;
  }
}
