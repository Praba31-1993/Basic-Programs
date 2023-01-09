const Fibonacci_Program = () => {
  // expected output : 0,1,1,2,3,5,8,13,21,34,55
  var c = 0,
    n = 100,
    p = 1,
    z;
  while (c <= n) {
    z = c + p;

    p = c;
    c = z;

    console.log("z", z);
  }
};
