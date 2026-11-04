// eu acho que a ordem será: loop acaba, i: 0, i: 1, i: 2, i: 3, i: 4

for (let i = 0; i < 5; i++){
    setTimeout(() => {console.log("i: " + i)}, 0);
}
console.log("loop acaba");
/*
    O uso de "let" faz com que cada loop do for tenha sua própria variável "i",
     assim cada callback captura o valor correto daquele ciclo: 0, 1 e 2.
    E se usar "var" no lugar de "let", a variável "i" é única e compartilhada entre todos os loops,
     então o valor final de "i" será 5, e todos os callbacks irão imprimir "i: 5".
*/