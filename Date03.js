// Crear un objeto con la fecha y horas actuales
const fechaActual = new Date();

//Obtener el mes actual
const meses = ['January','Frebuary','March','April','May','June','July','August','September','October','Novenmber','December'];
const mesActual = meses[fechaActual.getMonth()];

//Mostrar el nombre del mes actual en la consola
console.log(`El mes actual es: ${mesActual}`);
