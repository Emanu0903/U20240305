// Crear dos objetos Date para las fechas que comparare
const fecha1 = new Date('2023-12-25'); // Fecha 1
const fecha2 = new Date('2024-03-25'); // Fecha 2

// Calcular la diferencia en milisegundos
const diferenciaMilisegundos = fecha2 - fecha1;

// Convertir la diferencia de milisegundos a días
const milisegundosPorDia = 1000 * 60 * 60 * 24;
const diferenciaDias = diferenciaMilisegundos / milisegundosPorDia;

// Mostrar la diferencia en días
console.log(`La diferencia entre las dos fechas es de: ${diferenciaDias} días`);
