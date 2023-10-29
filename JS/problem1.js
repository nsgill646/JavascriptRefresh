//Add a "/" before every other div (How it should be) 
const input = "<div><blah> fsgys > <div><hshw<hsw><div><div>"
let subString ="";
let divCounter = 0;
let newString ="";
for(let stringIndex =0; stringIndex < input.length; stringIndex++){
  
    if(input[stringIndex]==="<"){
      
        for(let subStringIndex = 1; subStringIndex<5; subStringIndex++){
            subString += input[stringIndex + subStringIndex]; 
        }
    
        
       if(subString=="div>") {
        //console.log(subString)
             divCounter++;   
            //  console.log("DivCounter ran :", divCounter)
             if(divCounter%2===0){
                   newString += input[stringIndex] + "/"; 
                   //console.log(newString)
                   subString="";
                   continue;
                   
                   
                   
             }
       }
       subString="";
    }

    
    newString += input[stringIndex];
    
}
console.log("FINAL STRING:",newString);