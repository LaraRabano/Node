let userName = "Luis";
let age = 28
let hasHobbies = true


const summarizeUser = function(userName, age, hasHobbies) {
    return "Name is " + userName + ", age is " + age + " and " + userName + " has hobbies."
} //Esto es una función anónima a la que se le asigna un nombre, cuando se asigna a la variable a través del const. 

console.log(summarizeUser(userName, age, hasHobbies));