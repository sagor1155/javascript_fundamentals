// proxies (proxy object) are used to wrap an object and redefine various operations 
// into the object such as reading, insertion, validation, etc. 
// Proxy allows you to add custom behavior to an object or a function.
/*
The syntax of proxy is: 
    new Proxy(target, handler);
Here,
    new Proxy() - the constructor.
    target      - the object/function which you want to proxy
    handler     - can redefine the custom behavior of the object
*/

let person = {
    name: "Felix",
    age: 24
}

const handler = {
    get: function(obj, prop){
        // return value if key exists 
        // return obj[prop] ? obj[prop] : "Property doesn't exist";

        // check condition
        if (prop == 'name') {
            return obj[prop];
        } else {
            return 'Not allowed';
        }
    },

    set: function(obj, prop, value){
        // allow to change value
        // obj[prop] = value
        // return true

        // don't allow to change value 
        if (obj[prop]) {    
            // cannot change the student value
            console.log('Read only')
            return true
        }
    }
}

let proxy = new Proxy(person, handler)

proxy.name = "Loyera"   // Read only
console.log(proxy.name) // Felix
console.log(proxy.age)  // Not allowed
