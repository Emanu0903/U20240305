function verificarStock(cantidadSolicitada) {
    return new Promise((resolve,reject) => {
        const stockDisponible = 50;

        if (cantidadSolicitada <= stockDisponible) {
            resolve(`Stock suficiente para ${cantidadSolicitada} `);
        }else{
            reject("Stock insuficiente");
        }
    });
}

verificarStock(50)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));
