// for (var i = 10; i <= 1000; i += 250){
//     console.log(i);
// }

// for (var x = 0; x >= -500; x -= 10){
//     console.log(x);
// }

// for (var y = 1000; y >= 0; y-=50){
//     console.log(y);
// }

for (var n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 ===0) {
        console.log(n + " fizzbuzz");
    } else if (n % 3 === 0) {
        console.log(n + " fizz");
    } else if (n % 5 === 0) {
        console.log(n + " buzz");
    } else {
        console.log(n);
    }
}