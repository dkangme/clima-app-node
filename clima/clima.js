const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=572830d13a17be0bc0a7a68a72955a8d&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}