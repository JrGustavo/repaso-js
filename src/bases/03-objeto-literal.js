const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'Bogota',
        zip: 123456789,
        lng: 34.2344566
    }
};

//console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)
