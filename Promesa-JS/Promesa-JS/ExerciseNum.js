let numero = 5;
const verificarNumero = new Promise((resolve,reject) => {
    if (numero === 5) {
        resolve("El numero es 5")
    }else{
        reject("El numero no es 5")
    }
});

verificarNumero
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));