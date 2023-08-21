// #Object Questions
// Question 1
// What is an object in JavaScript?
// ans  =  object ak data struchur hh jisme ki value pair me data ko stor kraya jata hh 

// Question 2
// What is the difference between dot notation and bracket notation for accessing object properties?

// Question 3
// How do you loop through the properties of an object in JavaScript?
// let person = {
//     name : "alisher",
//     age  : 21,
//     city : "ladnun",
//     phone: 9649287338
// }


// let arr = Object.values(obj);
// for(let value of arr){
//     console.log(value)
// }
// for (let prop in object) {
//     // Do something with object[prop]
//   }
  
 
// Question 4
// What is the difference between an object and an array in JavaScript?

// Question 5
// Write a JavaScript function to convert an object into a list of [key, value] pairs.
// let obj = {
//     name : "alisher",
//      age  : 21,
//      city : "ladnun",
//      phone: 9649287338
// }
// function objectTolist(){
//     return Object.entries(obj);
// }
// console.log(objectTolist(obj))
// Question 6
// Write a function that takes an object representing a person and returns their full name.
// let person = {
//          fristName : "alisher",
//          lastName  : "khan",
//          city : "ladnun",
//          phone: 9649287338
//     }

//     console.log(person.fristName + "" + person.lastName)

//     function getfullName(){
//         return person.fristName + person.lastName
//     }
//     console.log(getfullName(person))
// Question 7
// Create an Object with your personal details. Now print all the keys of the object in ascending order.
// let personal = {
//          name : "alisher",
//           age  : 21,
//           city : "ladnun",
//           phone: 9649287338
//      }

//      let ans = Object.keys(personal);
//      let arr = ans.sort()
//      for(let value of arr){
//         console.log(value)
//      }

// Question 8
// Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.
// let personal = {
//     name : "alisher",
//      age  : 21,
//      city : "ladnun",
//      phone: 9649287338
// }

// let value = Object.values(personal)
// value.sort((a,b)=>{
//      return b-a
// })
// console.log(value)
// Question 9
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). On separate lines (one console.log statement for each), log the recipe information so it looks like: Mole Serves: 2 Ingredients: cinnamon cumin cocoa
// let recipe = {
//     titel : "mole",
//     sarvice : 2,
//     ingredients: ["cinnamon", "cumin", "cocoa"]
// }

// console.log(recipe.titel)
// console.log(recipe.sarvice);
// console.log(recipe.ingredients[2])
// Question 10
// Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.
// let fiidmaxofthee = {
//     fiidmaxofthee : (a,b,c)=>{
//         return Math.max(a,b,c)
//     }
// }
// console.log(fiidmaxofthee.fiidmaxofthee(12,34,57))

