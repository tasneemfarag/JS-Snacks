let users = {
  Tasneem: {
    age: 40,
    online: false
  },
  Mostafa: {
    age: 45,
    online: true
  },
  Tameema: {
    age: 2,
    online: false
  },
  Noah: {
    age: 0,
    online: true
  }
};
//get how many users are online
function countOnline(obj) {
  let online = 0;
  for (var property1 in obj) {
     for(var property2 in obj[property1]) {
       if (obj[property1][property2] === true){
         online ++;
       }
     }
  }
  return online;
}

console.log(countOnline(users));

//function that it returns an array containing all the properties in the object it receives as an argument.

// the one is going to return the object without the users
function getArrayOfUsers0(obj) {
    var objC = [];
    for (var property1 in obj) {
      objC.push(obj[property1]);
       for(var property2 in obj[property1]) {
         objC.push(obj[property1][property2]);
         }
       }
       return objC;
    }
//the second one is going to push the whole object int the new array
  function getArrayOfUsers1(obj) {
    var objC = [];
    objC.push(obj);
    return objC;
  }
  console.log(getArrayOfUsers1(users));
  
  //the third one is the right wat to get only the user name
  function getArrayOfUsers2(obj) {
    return Object.keys(users);
  }
  
  console.log(getArrayOfUsers2(users));