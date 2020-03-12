// var userOne = {
//     name: 'rhyno',
//     email: 'rhyno@gmail.com',
//     login(){
//         console.log(this.email, " has logged in");
//     },

//     logout(){
//         console.log(this.email, " has logged out");
//     }
// };

// console.log(userOne.name);
// console.log(userOne.email);

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         this.score = 0;
//     }

//     login(){
//         console.log(this.email, "has logged in");
//         return this;
//     }

//     logout(){
//         console.log(this.email, "has logged out");
//         return this;
//     }

//     updateScore(){
//         this.score++;
//         console.log(this.name + " has score of " + this.score);
//         return this;
//     }
// }

// class Admin extends User{
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }

function User(name, email){
    this.name = name;
    this.email = email;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, "has just logged in");
    return this;
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, "has just logged out");
    return this;
}

var userOne = new User("rhyno", "rhyno@gmail.com");
var userTwo = new User("groot", "groot@gmail.com");
// var admin   = new Admin("dstrange", "dstrange@gmail.com");
// var users = [userOne, userTwo, admin];
// admin.deleteUser(userOne);

// method chaining 
// userOne.login().updateScore().updateScore().logout();
// userTwo.login().updateScore().updateScore().logout();

