let num = 5;
for(let i=0;i<=num;i++){
    if(i===2){
        continue;
        //break;
    }
    console.log("Still in loop : " +i)
}
console.log("You outside")