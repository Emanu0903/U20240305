function verificarCodigoDescuento(codigo) {
    return new Promise((resolve,rejected) => {

        const condigoValido = "DESCUENTO 2024";
        if (codigo === condigoValido) {
            resolve("Codigo de descuento valido");
        }else{
            rejected("Codigo de descuento invalido");
        }
    });
}

verificarCodigoDescuento("DESCUENTO 2024")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));