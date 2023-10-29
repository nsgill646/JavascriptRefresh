const nestedArrayWithObject = [
    {serialNum: 1, name: "Jessie", age:34, hobbies:["jacking off","smoking js"]},
    {serialNum: 2, name: "Chut", age:22, hobbies:["muth off","phoking js"]},
    {serialNum: 3, name: "gandu", age:33, hobbies:["play off","winwe js"]},
    {serialNum: 22, name: "FDR", age:22, hobbies:["HHH off","JHU js"]},
]

let[{serialNum:rollNum ,name} ,,{hobbies, name:newName},...restProps] = nestedArrayWithObject;
console.log(newName)


let string = "GET OUT";
let revstring ="";
for(let char of string){
    revstring = char+revstring  ;
    //console.log(char)
}
console.log(revstring)