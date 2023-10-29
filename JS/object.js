const key = "email";
const obj = {
    name: "Jess",
    "age number": 34, 
    array:[23,56,78]
}

obj.array.push(8);

// obj["phone"] = "911";    //bracket notation
// obj.key = "123@xyz.com"  //dot notation

// //add const key value as key in key:value for obj
obj[key] = "maja@gmail.com"

console.log(obj);

// // Add new key-value pair to obkect
// obj.sex = ["male","female"];
// console.log(obj);


// //iterate an object

// //2 ways:
// //for in loop
// //Object.keys

// for(let key in obj){
//     console.log(key, ":",obj[key])
//     //console.log(`${key} : ${obj[key]}`);
// }

// const val = Object.keys(obj);
// console.log(val);
// const val1 = Array.isArray(val);
// console.log(val1)


// for(let key of Object.keys(obj)){
//     console.log(key, ":", obj[key])
// }
//  //Computed properties
// let value1 = "newV1";
// let value2 = "newV2";

// let key1 = "newK1";
// let key2 = "newK2";

// const obj2 = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj2);


//object destructing 
let {name:var1, array,...restProps} =obj;
console.log(var1);
console.log(restProps)
