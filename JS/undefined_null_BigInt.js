//undefined
let name;

console.log(typeof name);

//null
let thisVar = null;
console.log(typeof thisVar, thisVar); //type shows as object for null datatype ; its a know bug in javacsript


//BigInt

//ways to declare BigInt
let thisNum = BigInt(12);
let sameNumb = 123n; 

console.log(Number.MAX_SAFE_INTEGER);

console.log(thisNum+sameNumb);