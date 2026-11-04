// eu acho que a ordem será: começo, antes do await, fim, depois do await

async function teste() {
    console.log("antes do awiat");

    await null;

    console.log("depois do await");
}

console.log("começo");

teste();

console.log("fim");

/*
    A ordem é essa porque a função é executada normalmente como um console.log até o ponto do await,
    que pausa a execução da função e coloca o restante dela na fila de microtasks,
    então, o console.log("fim") é executado antes do console.log("depois do await").
*/