const axios = require('axios');

const obtenerTemp = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=806717fc9e0850e037d060ac9c09d7bb`);

    return resp.data.main.temp;
};

module.exports = {
    obtenerTemp
};