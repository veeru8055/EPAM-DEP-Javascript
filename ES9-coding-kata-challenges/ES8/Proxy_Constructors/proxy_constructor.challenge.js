// 1. SET 
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let manager = {
    office: `Dubai`,
    dept: `sales`,
    employees: 0
}

let mHandler = {
    set: (target,prop,value) => {
        if(Array.isArray(value)){
        }
        else if( typeof value == "string" || value ==null){
        }
        else{
            console.log("Invalid Employee Value!!");
            return "Invalid Employee Value!!";
        }
        target[prop]=value;
    }
}

manager=new Proxy(manager, mHandler);

manager.office = `London` //updates
manager.employees = ['Jim', 'Patrick', 'Mary']; //updates
manager.employees = 3; // doesn't update
manager.employees = null; // updates
manager.employees = {name:'Jim'} // doesn't update

// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is returned.

const users = [
    {
        username: `bob`,
        accessLevel: 1,
        accessCode: 1234
    },
    {
        username: `Mary`,
        accessLevel: 2,
        accessCode: 2345
    },
    {
        username: `Harold`,
        accessLevel: 2,
        accessCode: 9999
    }
]

let error={
    username: "Access Denied!",
    accessLevel: "Access Denied!",
    accessCode: "Access Denied!"
  }
  
  let handler = {
    get : (target, prop, value) => {
      if(target[prop].accessLevel != 1)
      return target[prop];
      else{
        return error;
      }
      
    }
  }
  
  let p=new Proxy(users,handler);
  
console.log(p[0].username)  // Access Denied
console.log(p[0].accessCode) // Access Denied
console.log(p[1].accessCode) // 2345
console.log(p[2].username) // Harold