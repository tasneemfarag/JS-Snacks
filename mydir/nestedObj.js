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
//get how many user are online
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