function Armstrong_Number() {
  // 153=(1^3)+(5^3)+(3^3) => 153  Output:true or False
  let User_Value = window.prompt("Enter your value");

  let Split_value = User_Value.split("");
  console.log("UserValueSplit", Split_value, "length", User_Value.length);

  let res = 0,
    cube;
  for (i = 0; i < Split_value.length; i++) {
    cube = res + Split_value[i]**User_Value.length;
    res = cube;
   
  }
  if (res == User_Value) {
    alert("It is a Armstrong Number");
  } else {
    alert("It is not a Armstrong Number");
  }
}
