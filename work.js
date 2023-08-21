 
    // Q 1.
    // let Marksheet = {
    //     StudentName: "Aarif",
    //     FatherName: "sher mohammad",
    //     ROllNO: 1245,
    //     collegename: "wecode Academy",
    //     class: "javaScript",
    //     marks: new Map([
    //       [87, "hindi"],
    //       [76, "english"],
    //       [92, "math"],
    //       [82, "science"],
    //     ]),
    //   };
    //   let marks = Marksheet.marks;
    //   let desendingMarks = new Map();
    //   for (let value of [...marks.keys()].sort((a, b) => b - a)) {
    //     if (value >= 80) {
    //       subject = Marksheet.marks.get(value) + " Distinction";
    //       desendingMarks.set(value, subject);
    //     } else {
    //       subject = Marksheet.marks.get(value);
    //       desendingMarks.set(value, subject);
    //     }
    //   }
    //   console.log(desendingMarks);
  
  

// 2. Take an Array 
//     -> Filter all odd numbers
//     -> Filter all numbers greater than 30 and less than 200
//     -> Convert every odd number to even number 
//     -> Print sum of all the numbers 

// let arr = [123,21,32,43,55,64,121,233,101,1101,111,120,130,11];
// let number = arr.filter((value)=>{
//     return value % 2 === 1
// }).filter((value)=>{
//     return value > 30 && value<200
// }).map((value)=>{
//     return value+1
// }).reduce((a,b)=>{
//     return a+b
// })
// console.log(number)

//Q 3.
// const eldestBrother = "sajid";
// const brother2 = "jakir";
// const brother3 = "imran";
// const brother4 = "rashid";
// const occupation = "Farmer";
// const secondSon   = "jahir";
// const thirdSon  = "salman";
// const fourthSon = "aalam"
// console.log(`3. Once upon a time, in a quaint village, lived four brothers - ${eldestBrother},${brother2},${brother3},${brother4}. They were hardworking and compassionate ${occupation}, tilling the land their ancestors had tended for generations.

// One day, a severe drought struck the village, leaving the fields parched and the crops withering away. The brothers were worried about their livelihood and the well-being of their fellow villagers. Despite their own struggles, they decided to help their community.

// [${eldestBrother}], the eldest brother, devised a plan to dig a well that would provide a consistent water source. [${secondSon}], with his engineering skills, designed a simple yet effective irrigation system. [${thirdSon}] used his persuasive nature to gather support from the village, while [${fourthSon}], the youngest, tirelessly worked alongside his brothers.

// Their dedication paid off. With the well and irrigation system in place, the village began to flourish again. Crops grew, and the villagers no longer worried about scarcity. The brothers' unity and selflessness had saved the day.

// This tale of four brothers and their unwavering commitment to their community serves as a reminder that compassion, innovation, and teamwork can overcome even the most challenging times.
// `)

// 6. Print below pattern
//     1 2 3 4 5
//     6 7 8 9 1
//     1 2 3 4 5
//     6 7 8 9 1
//     1 1 1 1 1

//  let num = 1;
// for (let i = 0; i < 5; i++) {
//         let str = '';
//  for (let j = 0; j < 5; j++) {
//   str = str+ num + ' ';
//     num = (num % 9) + 1;
// }
//    console.log(str);
//     }

//Q 7.
// let person = {
//          name: "Sajid Ali Khan",
//         gender: "Male",
//         age: 31,
//         address: {
//             pincode: 302012,
//             city: "Jaipur",
//             state: "Rajasthan"
//         },
//         mobile: 9584354354
//     }

//      person.name.split(" ").length >2 ? console.log("yes"):console.log("no")
//      person.gender === "Female" ? console.log('SHE IS FEMALE'): console.log('HE IS MALE')
//      person.address.city === "dehli" ? console.log("He lives in dehli"):console.log("he does not live in delhi")
//      person.mobile ?console.log("yes"):console.log("no")
//      person.age > 30 ?console.log("Is person older than 30 years") :console.log("Is person not older than 30 years")

//5. Create a datetime counter and display in format dd-mm-yyyy hh:mm:ss

// let date = new Date();
// let dd   = date.getDate();
// let mm   = date.getMonth()+1;
// let yyyy = date.getFullYear();
// let hh = date.getHours();
// let minutes = date.getMinutes();
// let ss  = date.getSeconds();
// setInterval(()=>{
//     ++ss;
//     if(ss === 60){
//         ss = 0;
//         ++minutes;
//         if(minutes === 60){
//             minutes = 0;
//             ++hh
//         }
//     }
//     let time = hh <12 ? "AM":"PM"
//     console.log(`${dd}-${mm}-${yyyy} ${addZero(hh)}:${addZero(minutes)}:${addZero(ss)} ${time}`)
// },1000)

// function addZero(timeUnit){
//     let timeUnitstr = String(timeUnit)
//     if(timeUnitstr.length === 1){
//         return "0".concat(timeUnitstr)
//     }
//     return timeUnitstr
// }

// 9. Take a sentence like 
//     "My name is Wecode Academy and I teach JavaScript";

// Now do below operations on this String
//     1. convert all characters to lowercase
//     2. replace JavaScript with Nodejs
//     3. Remove any space before or after the string
//     4. Now divide the sentence in two parts
//     5. Convert first part to upper case 
//     6. Convert second part to lower case
//     7. Concatenate both the words and print on console

let str = "My name is Wecode Academy and I teach JavaScript";
let lowercase = str.toLowerCase();
let replace  = str.replace("JavaScript","Nodejs");
let space    =  str.trim();
let midel    = str.length/2
let fristPart = str.slice(0,midel).toUpperCase()
let secondPart = str.slice(midel).toLowerCase()
console.log(lowercase, replace , space , fristPart,secondPart)
console.log(fristPart+ "" +secondPart)

