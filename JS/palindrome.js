const inputString ="SataS";
let newString ="";
console.log(inputString)


    for(let backIndex = inputString.length-1;backIndex>=0;backIndex--){
        newString += inputString[backIndex];
    }
    console.log(newString)
    if(inputString==newString){
        console.log("LTES GO")
    }
