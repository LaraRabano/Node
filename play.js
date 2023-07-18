let userName = "Luis";
let age = 28
let hasHobbies = true


const summarizeUser = (userName, age, hasHobbies) => {
    return "Name is " + userName + ", age is " + age + " and " + userName + " has hobbies is " + hasHobbies
} //Esto es una función anónima a la que se le asigna un nombre, cuando se asigna a la variable a través del const. 

const add = (a, b) => {
    return a + b;
}; // Es lo mismo que escribir: const add = (a, b) => a + b;

const addOne = a => a + 1; //Cuando SÓLO se le va a pasar un argumento a la función, puede ir sin paréntesis. 

console.log(summarizeUser(userName, age, hasHobbies));