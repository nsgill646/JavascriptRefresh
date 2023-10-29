let num = [1,3,4,5];
let numNam = num

//
//num.shift();                  //Shift (remove) the first element of the array
//console.log(numNam)
let names =["red", "blu", "heyo"]

// //serialized collection of items - arrays (reference datatype)
// //mutable
// names[1] = names[2];
// console.log(names);


// let obh = {}; //object literal


//Find if array (object type)
console.log(Array.isArray(obh));


// //PUSH - POP 
// names.push("jess");
// console.log(names);
// names.pop();
// console.log(names);


// //UNSHIFT - SHIFT
// num.unshift(67);
// console.log(num);

// num.shift();
// console.log(num);


//how clone an array
//SPREAD OPERATOR - to create a new refernece in heap for new array
// let num1 = [...num];
// let num2 = [34, ...num1, 45, 57]; 
// let num3 = [...num1, ...num2]
// num.pop();
// console.log(num3)



//for loop in arrays

let arr =[];
for(let i=arr.length;i<3;i++){
   // console.log(typeof i,i)
    arr.push(8+i);
    


}
console.log(arr)


//for of loop in arrays ---> used to iterate the whole array
for(let n of num){
//     arr.push(57);
//     console.log(arr)

    console.log(n)
}
// console.log(arr)


//Array destructing  --->IMP
const myArr = ["Jes","Sam","Bha","Sim","NY"];
// let myArrf = myArr.slice(4)
let [myarr1, myarr2, , ...myarr3] = myArr;
console.log(myarr1,myarr2,myarr3)
