// Crear el objeto Date
const fecha = new Date(2012, 1, 20, 3, 12); // Año, Mes (0 = Enero), Día, Hora, Minuto

// Obtener la hora en formato AM/PM
const opciones = { hour: 'numeric', minute: 'numeric', hour12: true };
const horaFormateada = fecha.toLocaleString('en-US', opciones);

console.log(`La fecha es: ${fecha}`);
console.log(`La hora formateada es: ${horaFormateada}`);