// Desestrcuturacion
//Asignacion Desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman',
};

//const useContext = ({edad, clave, nombre,}) = persona;


const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
   // console.log(edad. clave, nombre)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.2345,
            lng: -12.3455
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng)
