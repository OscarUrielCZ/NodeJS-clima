const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'Dirección de la ciudad'
        }
    })
    .argv;

const mapa = require('./mapa/mapa');
const clima = require('./clima/clima');


const obtenerInfo = async direccion => {
    try {
        let coords = await mapa.obtenerCoords(direccion);
        let temp = await clima.obtenerTemp(coords.lat, coords.lng);

        return `La temperatura en ${ coords.direccion } es de ${ temp } °C`;
    } catch (err) {
        return `No se pudo determinar la temperatura en ${ direccion }`;
    }
};

obtenerInfo(argv.direccion)
    .then(temp => console.log(temp))
    .catch(err => console.log(err));