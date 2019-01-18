const axios = require('axios');

const obtenerCoords = async direccion => {
    let urlencoded = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ urlencoded }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se ha encontrado ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    };
};

module.exports = {
    obtenerCoords
};