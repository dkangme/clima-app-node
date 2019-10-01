const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección para obtener el clima',
        demand: true
    }
}).argv;

// const l = lugar.getLugarLatLon(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });

// console.log(l);

// clima.getClima(-34.610001, -58.369999)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);

        return `El clima de ${direccion} es de ${ temp }º C`;
    } catch (e) {

        return `No se pudo determinar el clima de ${coords.direccion}`;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);