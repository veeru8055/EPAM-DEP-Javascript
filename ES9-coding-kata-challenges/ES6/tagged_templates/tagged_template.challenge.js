//With the template provided, write a template tag that will validate an SQL statement:
//Only SELECT or UPDATE statements are valid - write validation logic which allows only SELECT, UPDATE
//The passwords table cannot be altered
//there is no order by clause, add it and order by asc
// When done, return the reconstructed query or a note any errors

let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `USERS`;
let whereClauses = [
    `uid = ${2+1}`,
    `OR city = ${city}`
]

// Your code to call the tag and log the return value here...
// your output should be - SELECT * FROM USERS WHERE uid = 3 OR city = chicago ORDER BY asc
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery() {
    let finalQuery;
    if(command.includes("SELECT")){
        finalQuery=`${command} from ${table} where ${whereClauses[0]} ${whereClauses[1]} ORDER BY asc`;
    }else if(command.includes("UPDATE")){
        if(table=="PASSWORDS"){
            return "ERROR! Cannot alter this table!"
        }
        finalQuery=`${command} from ${table} where ${whereClauses[0]} ${whereClauses[1]} ORDER BY asc`;
    }else{
        return "ERROR!";
    }
    //Your validation code here...
    return (finalQuery);
}
console.log(checkQuery());