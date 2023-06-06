// script.js

// Example: Display a message in the console
console.log("Hello, JavaScript!");

var sum_to_n_a = function (n) {
    var total = 0;
    for (let i = n; i != 0; i--) {
        total = total + i;
    }
    document.getElementById("output1").textContent = total;
    // return total;
};

var sum_to_n_b = function (n) {
    document.getElementById("output1").textContent = (n * (1 + n)) / 2;
    return (n * (1 + n)) / 2;
};

var sum_to_n_c = function (n) {
    if (n == 1) {
        return 1;
    }
    total = n + sum_to_n_c(n - 1);
    document.getElementById("output1").textContent = total;
    // return n + sum_to_n_c(n-1);
    return total;
};

// For submission
// var sum_to_n_a = function (n) {
//     var total = 0;
//     for (let i = n; i != 0; i--) {
//         total = total + i;
//     }
//     return total;
// };

// var sum_to_n_b = function (n) {
//     return (n * (1 + n)) / 2;
// };

// var sum_to_n_c = function (n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n + sum_to_n_c(n-1);
// };
