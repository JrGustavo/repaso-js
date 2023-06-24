
const saludar2  = (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludar3  = (nombre) => `Hola, ${nombre}`;
const saludar4  = () => `Hola mund`;



console.log(saludar3('Vegeta'));
console.log(saludar4('Goku'));
console.log(saludar2());

const getUsuarioActivo = (nombre)  => ({
    uid: 'ABC123445',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Gustavo');
console.log(usuarioActivo);