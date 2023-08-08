// Create a new Map and add key-value pairs to it..
// let map = new Map();
// map.set(1,1000);
// map.set("name" , "alisher");
// console.log(map)

// Get the value of a specific key in a Map.
// let map = new Map();
// map.set(1,1000);
// map.set("name" , "alisher");
// console.log(map.has(1))// true


// Check if a key exists in a Map.
// let map = new Map();
// map.set(1,1000);
// map.set("name" , "alisher");
// if(map.has("name")){
//     console.log("key in the map");
// }else{
//     console.log("no")
// }

// Iterate over the value of a Map using a for...of loop.
// let map = new Map();
// map.set(1,1000);
// map.set("name" , "alisher");
// map.set(2,200);
// map.set(3,300)
// let ans = map.values()
// console.log(ans)
// let arr = [...ans]
// for(let value of arr){
//     console.log(value)
// }

// Iterate over the key of a Map using a for...of loop.
// let map = new Map();
// map.set(1,1000);
// map.set("name" , "alisher");
// map.set(2,200);
// map.set(3,300)
// let ans = map.keys()
// console.log(ans)
// let arr = [...ans]
// for(let key of arr){
//     console.log(key)
// }
// Iterate over the key-value pairs of a Map using a for...of loop.
// let map = new Map();
// map.set(1,1000);
// map.set("name" , "alisher");
// map.set(2,200);
// map.set(3,300)
// let ans = map.entries()
// console.log(ans)
// let arr = [...ans]
// for(let value of arr){
//     console.log(value[0],value[1])
// }

// Convert a Map to an array of key-value pairs.
// let map = new Map();
// map.set(1,1000);
// map.set("name" , "alisher");
// map.set(2,200);
// map.set(3,300)
// let arr = [...map]
// console.log(arr)

// Convert an array of key-value pairs to a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
// let map = new Map(arr)
// console.log(map)


// Use the forEach() method to iterate over the key-value pairs of a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//   map.forEach((value , key)=>{
//     console.log(value,key)
//   })


// Use the Map keys() method to get an iterator for the keys of a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//  let keys = map.keys();
//  for(let key of keys ){
//     console.log(key)
//  }


// Use the Map values() method to get an iterator for the values of a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//  let values = map.values();
//  for(let value of values ){
//     console.log(value)
//  }

// Use the Map entries() method to get an iterator for the key-value pairs of a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//  let keyValue = map.entries();
//  for(let value of keyValue ){
//     console.log(value[0],value[1])
//  }

// Use the Map has() method to check if a Map contains a key.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//  if(map.has(2)){
//     console.log("key hh ")
//  }else{
//     console.log("key nhi hh ")
//  }


// Use the Map get() method to get the value associated with a key in a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
// console.log(map.get("name"));
 
// Use the Map set() method to add a new key-value pair to a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//  map.set("city" , "ladnun")
//  console.log(map)


// Use the Map delete() method to remove a key-value pair from a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//  map.delete(1,100)
//  console.log(map)


// Use the Map clear() method to remove all key-value pairs from a Map.
// let arr = [ [ 1, 1000 ], [ 'name', 'alisher' ], [ 2, 200 ], [ 3, 300 ] ]
//  let map = new Map(arr)
//  map.clear()
//  console.log(map)


// Use the Object.fromEntries() method to create a new object from a Map.
// Use the Map constructor to create a new Map from an array of key-value pairs.