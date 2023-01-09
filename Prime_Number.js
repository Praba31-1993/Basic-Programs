function Prime_Program(){
let x =window.prompt("Enter your name");
if(x %1 ==0 && x %x===0){
    for (let i=2;i<x;i++){
                if(x%i==0){
                    console.log("It is not a Prime Number")
                }
    }
    
    console.log("It is a Prime Number")
}
}