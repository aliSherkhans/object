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

 let ans = Object.keys(obj);
 console.log(ans)
 for(let value of ans){
    console.log(value)
 }

 let ans1 = Object.values(obj);
 console.log(ans1)
 for(let value of ans1){
    console.log(value)
 }

 let ans2 = Object.entries(obj);
 console.log(ans2)
 for(let i = 0 ; i < ans2.length ; i++){
    console.log(ans2[i][0] + ":" + ans2[i][1]) 
 
 if( typeof ans2[i][1] === "object"){
    let ans4 = ans2[i][1];
    let ans5 = Object.entries(ans4)
    for(let j = 0 ; j < ans5.length ; j++){
        console.log(ans5[j][0] + ":" + ans5[j][1])
    }
 }
}