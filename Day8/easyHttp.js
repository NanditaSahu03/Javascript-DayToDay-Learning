/**
 * EasyHTTP Library
 * Library for making HTTP requests
 */

//Using Fetch API with Promises and Arrows

class EasyHttp{
  //Make an Http get request
  get(url){
    return new Promise( (resolve,reject) =>{
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }



  //Make an Http post request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }



  //Make a Http put method
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }


  
  //Make a Http delete request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => resolve('Resource deleted'))
      .catch(err => reject(err));
    });
  }

}
