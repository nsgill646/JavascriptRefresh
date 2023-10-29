let inputNum = Number(prompt("Input Number"));   //let inputNum = +prompt("Input Number");

if(inputNum===5){
    console.log(typeof inputNum, "Got the right number")
}
    else{
        if(inputNum < 5){
            console.log("Too low")
        }
        else{
            console.log("Too high")

        }
    }

