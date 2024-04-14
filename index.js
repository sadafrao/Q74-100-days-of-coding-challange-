// Q74
// this function swaps the values of two variables
function swap() {
    var a = 5, b = 10; // starting a is 5 b is 10
    console.log("Before swapping: a = " + a + ", b = " + b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swapping: a = " + a + ", b = " + b);
}
swap();
