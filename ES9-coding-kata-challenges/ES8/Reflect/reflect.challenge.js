
let course = {
    author : "Veeru"
}
Reflect.defineProperty(course, 'name', {value:"Javascript", writable:false, enumerable:true});
Reflect.defineProperty(course, 'duration', {value:"3 hours", writable:false, enumerable:true});
console.log("Before deleteProperty : ", course);
Reflect.deleteProperty(course, 'author');
console.log("After deleteProperty(author) : ", course);
console.log("Name : ", Reflect.getOwnPropertyDescriptor(course,'name').value);
console.log("Writable : ", Reflect.getOwnPropertyDescriptor(course,'name').writable);
// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property
