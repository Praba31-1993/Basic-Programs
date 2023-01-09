function Palindrome_Program(){
    let res =1
    let User_Value = window.prompt("Enter your value");
    for (let i=User_Value; i>=1;i--){
        res= res*i
        console.log(`Factorial of ${User_Value} is`,res);
    }
}