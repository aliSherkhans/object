<<<<<<< HEAD
// let obj = {
//     name : "alisher",
//     age   : 21,
//     mubail : 9649287338,
//     address : {
//         city : "ladnun",
//         pincode : 341306
//     }
//  }
//  console.log(obj)
//  console.log(obj.name,obj.age , obj.mubail, obj.address.city , obj.address.pincode)
//  console.log(obj["name"],obj["age"],obj["mubail"],obj["address"]["city"],obj["address"]["pincode"])
//  obj.name = "ali";
//  obj["age"] = 23;
//  console.log(obj.name)
//  console.log(obj)

//  let ans = Object.keys(obj);
//  console.log(ans)
//  for(let value of ans){
//     console.log(value)
//  }
=======
``` script
let obj = {
    name : "alisher",
    age   : 21,
    mubail : 9649287338,
    address : {
        city : "ladnun",
        pincode : 341306
    }
 }
 console.log(obj)
 console.log(obj.name,obj.age , obj.mubail, obj.address.city , obj.address.pincode)
 console.log(obj["name"],obj["age"],obj["mubail"],obj["address"]["city"],obj["address"]["pincode"])
 obj.name = "ali";
 obj["age"] = 23;
 console.log(obj.name)
 console.log(obj)
```
 let ans = Object.keys(obj);
 console.log(ans)
 for(let value of ans){
    console.log(value)
 }
>>>>>>> b02f45d1aa3fc472fe6c04e75edf78aabfb98f1b

//  let ans1 = Object.values(obj);
//  console.log(ans1)
//  for(let value of ans1){
//     console.log(value)
//  }

//  let ans2 = Object.entries(obj);
//  console.log(ans2)
//  for(let i = 0 ; i < ans2.length ; i++){
//     console.log(ans2[i][0] + ":" + ans2[i][1]) 
 
//  if( typeof ans2[i][1] === "object"){
//     let ans4 = ans2[i][1];
//     let ans5 = Object.entries(ans4)
//     for(let j = 0 ; j < ans5.length ; j++){
//         console.log(ans5[j][0] + ":" + ans5[j][1])
//     }
//  }
// }

// let obj = {
//    name : "alisher",
//    age  : 21,
//    address : {
//       city  : "ladnun",
//       pincode : 341306
//    }
// }
// obj.name = "myname"

// let ans = Object.keys(obj);
// for(let key of ans){
//    console.log(key)
// }

// ans.forEach((key)=>{
//    console.log(key)
// })

// obj.name = "ali"
// let ans1 = Object.values(obj);
// for(let val of ans1){
//    console.log(val)
// }

// ans1.forEach((val)=>{
//    console.log(val)
// })

// let ans2 = Object.entries(obj)
// for(let i = 0 ; i< ans2.length ; i++){
//    console.log(ans2[i][0] , ans2[i][1])
//    if(typeof ans2[i][1] === "object"){
//       let ans4 = Object.entries(ans2[i][1])
//       for(let j = 0 ; j < ans4.length ; j++){
//        console.log(ans4[j][0] + ":" + ans4[j][1])
//       }
//    }
// }

// console.log(obj.name , obj.age , obj.address.city,obj.address.pincode);
// console.log(obj["name"],obj["age"],obj["address"]["pincode"],obj["address"]["city"])


// let arr = [1,2,3,4,5,6,7,6,5,4,5,6,7,8,9,6,5,4];
// let arr1 = [];
// for(let value of arr){
//    if(arr1.includes(value)){
//       continue
//    }else{
//       arr1.push(value)
//    }
   
// }
// console.log(arr1)



// 1. Ek numbers ka Array bnana hai. Numbers me se jo max number hai vo find out Krna hai but reduce function se Krna hai ye only


// 3. Ek array bnana hai numbers ka aur isme ye btana hai ki kaunsa number kitni bar repeat hua hai
// let arr = [1,2,3,5,6,7,7,4,3,4,5,3];
// let map = new Map();
// for(let key of arr){
//     if(map.has(key)){
//         let value = map.get(key)+1;
//         map.set(key,value);
//     }else{
//         map.set(key,1)
//     }
// }
// console.log(map)
// let arr1  = [...map];
// console.log(arr1)
// For example
// 1,2,2,4,5,3,5,5

// To answer aana chahiye
// 1:1, 2:2, 4:1, 3:1, 5:5 

// 3. Ek array bnana hai numbers ka. Ab is array me kaunsa number sbse jyada bar repeat hua hai vo btana hai. For example: 1,2,2,3,4,5 to answer aana chahiye 2 because 2 numbers 2 bar repeat hua hai.
let arr = [1,2,3,4,5,6,7,8,9,2,4,5];
let count = 0;


for(let i = 0 ; i< arr.length ; i++){
    let dupliket = arr[i];
    if(dupliket ===  arr[i]){
        dupliket = arr[i];
        count++
    }
<<<<<<< HEAD
      
      console.log(dupliket)
}
//console.log(dupliket)

// 4. Kisi array me total kitne numbers duplicate the vo btana hai. Like 1,1,2,3,4,4,1,2

// To isme total 3 numbers duplicate hai Jo firse repeat hue hai 1,2 and 5

// Ye questions krne hai. 30 minutes hai. 8:30 se revision class start krunga. Tb tak ye questions solve kro
=======
 }
}
>>>>>>> b02f45d1aa3fc472fe6c04e75edf78aabfb98f1b
