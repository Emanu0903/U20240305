let readline= require('readline')
let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese su nombre: ',(nombre) =>{
    rl.question('Ingrese su  apellido:', (apellido)=>{
        console.log(`Hola ${nombre} ${apellido}!`);
        process.exit()
    })
    

})