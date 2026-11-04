//eu acho que a ordem será: 1, 3, 5, 4, 2

console.log("1");

setTimeout(() => {console.log("2")}, 200);

console.log("3");

setTimeout(() => {console.log("4")}, 0);

console.log("5");