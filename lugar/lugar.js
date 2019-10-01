const axios = require('axios');


const getLugarLatLon = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'eac4a9a3f6msh51352a45ea76b76p122938jsnf0b8539ef6b9' }
    });

    const resp = await instance.get();


    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay datos para la ciudad ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lon = data.lon;



    return {
        address,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}