// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%

class Person{
    constructor(registered){
        this.registered=registered;
    }

    discount(amount){
        if(this.registered){
            return amount-5/100*amount;
        }else{
            return amount-4/100*amount;
        }
    }
}

var person1 = new Person(true);
var person2 = new Person(false);

console.log(`Discount for (registered)person 1 on 2000 : ${person1.discount(2000)}
Discount for (non-registered)person 2 on 2000 : ${person2.discount(2000)}`);