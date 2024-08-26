// Crear un objeto Date con la fecha y hora actuales
const fechaActual = new Date();

// Obtener el día de la semana (0 = Domingo, 1 = Lunes, etc.)
const diasSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const diaActual = diasSemana[fechaActual.getDay()];

// Mostrar el día de la semana en formato corto
console.log(`Hoy es: ${diaActual}`);
