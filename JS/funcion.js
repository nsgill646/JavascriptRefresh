// function isEven(number){
//     if(number%2==0){
//         return number;
//     }
//        return false;
    
// }

// console.log(isEven(5));


//Function expression
// let isEven = function(number){
//     return number % 2 ==0;
// }

//NOTE: Function inizilation issue only occurs in FUNCTION EXPRESSION AND ARROW FUNCTION
        //Only works for FUNCTION DECLARATION (called HOISTING)


//Arrow Function
let isEven = (number) => {
    return number%2 ===0;
}

console.log(isEven(3))
// //INPUT: string
// //OUTPUT: firstCharacter

// function extractFirstChar(string){
//     return string[0];

// }

// console.log(extractFirstChar("HJJH"))

//INPUT: array, target (number/string in array)
//OUTPUT: index of target

// function findIndex(array,target){
//     for(let i=0; i<array.length; i++){
//         if(array[i]===target){
//             return i; 
            
//         }
        
        
//     }
    
// }
// let array1 = [5,0,8,0];

// console.log(findIndex([0,2,9,9,0,7,0],0))